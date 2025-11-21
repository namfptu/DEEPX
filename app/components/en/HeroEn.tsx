export default function HeroEn() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-32 pb-20 px-5"
      style={{
        background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30 overflow-hidden"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300D9FF" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
        }}
      ></div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp"
          style={{
            background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Build the digital future with AI & smart infrastructure
        </h1>

        <p
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          DeepX – your trusted partner for digital transformation, delivering breakthrough AI and digital infrastructure solutions for businesses
        </p>

        <div
          className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          {/* Primary Button */}
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
            }}
          >
            <span className="relative z-10">Free consultation</span>
            <div
              className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"
            ></div>
          </a>

          {/* Secondary Button */}
          <a
            href="#services"
            className="px-8 py-3 rounded-full font-medium border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            Explore solutions
          </a>
        </div>
      </div>
    </section>
  );
}

