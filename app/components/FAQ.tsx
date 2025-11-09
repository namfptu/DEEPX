'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'DeepX cung cấp những giải pháp gì?',
    answer: 'DeepX cung cấp 4 nhóm giải pháp chính: AI & Data Solutions cho phân tích và tối ưu hóa dữ liệu; IoT & Infrastructure cho hạ tầng số thông minh; Healthcare Solutions với HIS, ERP và AI y tế; và SME Solutions giúp doanh nghiệp vừa và nhỏ chuyển đổi số hiệu quả.',
  },
  {
    question: 'Đội ngũ sáng lập DeepX gồm những ai?',
    answer: 'DeepX được thành lập bởi 5 đồng sáng lập với chuyên môn sâu trong các lĩnh vực: AI & Data, Infrastructure & IoT, Healthcare Technology, và Business Development. Mỗi thành viên phụ trách một mảng chuyên môn riêng, cùng hợp tác để mang lại giải pháp toàn diện.',
  },
  {
    question: 'Ý nghĩa của tên DeepX là gì?',
    answer: '"Deep" thể hiện sự chuyên sâu trong công nghệ AI và dữ liệu, "X" đại diện cho sự đa dạng và không giới hạn trong các giải pháp. DeepX cam kết đào sâu vào từng vấn đề để tìm ra giải pháp tối ưu nhất cho khách hàng.',
  },
  {
    question: 'Làm thế nào để hợp tác với DeepX?',
    answer: 'Bạn có thể liên hệ với chúng tôi qua form liên hệ trên website, email, hoặc số điện thoại. Đội ngũ tư vấn của DeepX sẽ lắng nghe nhu cầu, phân tích thách thức và đề xuất giải pháp phù hợp nhất cho doanh nghiệp của bạn.',
  },
];

export default function FAQ() {
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
            Câu hỏi thường gặp
          </h2>
          <p className="text-xl text-gray-400">
            Tìm hiểu thêm về DeepX và các giải pháp của chúng tôi
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

