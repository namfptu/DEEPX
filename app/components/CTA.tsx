export default function CTA() {
  return (
    <section id="contact" className="py-24 px-5 bg-[#1a1f2e] text-center">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{
            background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sẵn sàng chuyển đổi số cùng DeepX?
        </h2>

        <p className="text-xl text-gray-400 mb-10">
          Hãy để chúng tôi đồng hành cùng bạn trong hành trình kiến tạo tương lai số
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap">
          {/* Primary Button */}
          <a
            href="mailto:contact@deepx.vn"
            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
            }}
          >
            <span className="relative z-10">Liên hệ ngay</span>
            <div
              className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"
            ></div>
          </a>

          {/* Secondary Button */}
          <a
            href="tel:+84900000000"
            className="px-8 py-3 rounded-full font-medium border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            Gọi tư vấn
          </a>
        </div>
      </div>
    </section>
  );
}

