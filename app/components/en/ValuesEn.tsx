'use client';

import { useEffect, useRef } from 'react';

const values = [
  { letter: 'S', name: 'Speed', description: 'Fast in action, agile in decision-making' },
  { letter: 'P', name: 'Passion', description: 'Work with heart and responsibility' },
  { letter: 'I', name: 'Innovation', description: 'Constantly innovate to find better ways' },
  { letter: 'R', name: 'Reliability', description: 'Deliver on commitments with quality and integrity' },
  { letter: 'E', name: 'Efficiency', description: 'Optimize resources and create real value' }
];

export default function ValuesEn() {
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
    <section id="values" className="py-24 px-5 bg-[#0f1218]">
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
            Core Values SPIRE
          </h2>
          <p className="text-xl text-gray-400">
            The foundation guiding all DeepX activities
          </p>
        </div>

        {/* Values Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="scroll-animate text-center p-8 bg-cyan-400/5 border border-cyan-400/10 rounded-xl transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105 cursor-pointer"
            >
              {/* Letter */}
              <div
                className="text-5xl font-bold mb-3"
                style={{
                  background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {value.letter}
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {value.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

