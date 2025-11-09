'use client';

import { useEffect, useRef } from 'react';
import { FaChartLine } from 'react-icons/fa';

export default function About() {
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
    <section id="about" className="py-24 px-5 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="scroll-animate">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Về DeepX
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed">
              <strong className="text-gray-200">Tầm nhìn:</strong> Trở thành đơn vị hàng đầu Việt Nam về dữ liệu và hạ tầng số thông minh, tiên phong ứng dụng trí tuệ nhân tạo trong các lĩnh vực quản trị, y tế, đô thị và sản xuất.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              <strong className="text-gray-200">Sứ mệnh:</strong> Kiến tạo các giải pháp dữ liệu và hạ tầng số đột phá, ứng dụng trí tuệ nhân tạo để mang lại giá trị thiết thực cho doanh nghiệp và xã hội, góp phần xây dựng nền kinh tế số bền vững.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  4+
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  Lĩnh vực chuyên sâu
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  5
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  Đồng sáng lập
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  20B
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  Mục tiêu doanh thu 2026
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ∞
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  Cam kết chất lượng
                </p>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div
            className="scroll-animate w-full h-96 rounded-3xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
              }}
            ></div>
            <div className="relative z-10 text-center">
              <FaChartLine className="text-6xl text-white mb-5 mx-auto" />
              <p className="text-white text-xl font-semibold">Đổi mới không ngừng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

