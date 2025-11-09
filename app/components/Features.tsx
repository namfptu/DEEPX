'use client';

import { useEffect, useRef } from 'react';
import { FaBrain, FaNetworkWired, FaHospital, FaBuilding } from 'react-icons/fa';

const features = [
  {
    icon: FaBrain,
    title: 'AI & Data Solutions',
    description: 'Ứng dụng trí tuệ nhân tạo và phân tích dữ liệu tiên tiến để tối ưu hóa quy trình và ra quyết định thông minh',
  },
  {
    icon: FaNetworkWired,
    title: 'IoT & Infrastructure',
    description: 'Xây dựng hạ tầng số thông minh, kết nối vạn vật để tạo nên hệ sinh thái số hoàn chỉnh',
  },
  {
    icon: FaHospital,
    title: 'Healthcare Solutions',
    description: 'Giải pháp y tế thông minh với HIS, ERP và AI chuyên sâu cho ngành y tế',
  },
  {
    icon: FaBuilding,
    title: 'SME Solutions',
    description: 'Giải pháp tối ưu cho doanh nghiệp vừa và nhỏ, giúp số hóa và tăng trưởng bền vững',
  },
];

export default function Features() {
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
    <section id="services" className="py-24 px-5 bg-[#1a1f2e]">
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
            Lĩnh vực hoạt động
          </h2>
          <p className="text-xl text-gray-400">
            Giải pháp toàn diện cho mọi thách thức chuyển đổi số
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="scroll-animate bg-[rgba(26,31,46,0.8)] backdrop-blur-md border border-cyan-400/10 rounded-2xl p-8 text-center transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg group relative overflow-hidden"
                style={{
                  boxShadow: 'none',
                }}
              >
                {/* Top border gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Icon */}
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center text-2xl text-white"
                  style={{
                    background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
                  }}
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-200 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

