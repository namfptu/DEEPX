'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'What solutions does DeepX provide?',
    answer: 'DeepX offers four main solution groups: AI & Data Solutions for analytics and optimization; IoT & Infrastructure for smart digital infrastructure; Healthcare Solutions with HIS, ERP and medical AI; and SME Solutions that help small and medium enterprises transform effectively.',
  },
  {
    question: 'Who are the founders of DeepX?',
    answer: 'DeepX was founded by five co-founders with deep expertise in AI & Data, Infrastructure & IoT, Healthcare Technology, and Business Development. Each member leads a specialized area, collaborating to deliver comprehensive solutions.',
  },
  {
    question: 'What is the meaning behind the name DeepX?',
    answer: '“Deep” represents depth in AI and data technology, while “X” stands for diversity and limitless possibilities. DeepX is committed to digging deep into each challenge to find the optimal solution for clients.',
  },
  {
    question: 'How can I collaborate with DeepX?',
    answer: 'You can contact us via the contact form on the website, email, or phone. DeepX’s consulting team will listen to your needs, analyze challenges, and propose the best-fit solution for your business.',
  },
];

export default function FAQEn() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = containerRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-5 bg-[#0f1218]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Learn more about DeepX and our solutions
          </p>
        </div>

        {/* FAQ Container */}
        <div ref={containerRef} className="max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="scroll-animate mb-5 bg-[rgba(26,31,46,0.8)] border border-cyan-400/10 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-cyan-400/5 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-200 text-left">
                  {item.question}
                </h3>
                <FaChevronDown
                  className={`text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

