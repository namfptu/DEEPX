'use client';

import { useEffect, useRef } from 'react';

const values = [
  {
    letter: 'S',
    name: 'Speed',
    description: 'Tốc độ - Nhanh trong hành động, linh hoạt trong quyết định',
  },
  {
    letter: 'P',
    name: 'Passion',
    description: 'Nhiệt huyết - Làm việc bằng trái tim và tinh thần trách nhiệm',
  },
  {
    letter: 'I',
    name: 'Innovation',
    description: 'Đổi mới - Không ngừng sáng tạo để tìm ra cách tốt hơn',
  },
  {
    letter: 'R',
    name: 'Reliability',
    description: 'Tin cậy - Mọi cam kết được thực hiện với chất lượng và uy tín',
  },
  {
    letter: 'E',
    name: 'Efficiency',
    description: 'Hiệu quả - Tối ưu nguồn lực, tạo giá trị thực tế',
  },
];

export default function Values() {
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
            Giá trị cốt lõi SPIRE
          </h2>
          <p className="text-xl text-gray-400">
            Nền tảng định hướng mọi hoạt động của DeepX
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

