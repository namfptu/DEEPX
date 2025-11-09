import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f1218] border-t border-cyan-400/10">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Column 1: Company Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-5">
              Công ty Cổ phần Giải pháp DeepX
            </h4>
            <p className="text-gray-400 leading-relaxed mb-5">
              Kiến tạo các giải pháp dữ liệu và hạ tầng số đột phá, ứng dụng trí tuệ nhân tạo để mang lại giá trị thiết thực cho doanh nghiệp và xã hội.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-cyan-400/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 hover:text-white transition-all duration-300 hover:translate-y-[-3px]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-400/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 hover:text-white transition-all duration-300 hover:translate-y-[-3px]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-400/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 hover:text-white transition-all duration-300 hover:translate-y-[-3px]"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-400/10 rounded-full flex items-center justify-center text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 hover:text-white transition-all duration-300 hover:translate-y-[-3px]"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-5">
              Giải pháp
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  AI & Data
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  IoT & Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  SME Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-5">
              Công ty
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#values" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Giá trị cốt lõi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Đội ngũ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-5">
              Liên hệ
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-cyan-400 flex-shrink-0" />
                <span>Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-cyan-400 flex-shrink-0" />
                <a href="tel:+84900000000" className="hover:text-cyan-400 transition-colors">
                  +84 900 000 000
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                <a href="mailto:contact@deepx.vn" className="hover:text-cyan-400 transition-colors">
                  contact@deepx.vn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-cyan-400/10 py-6 px-5 text-center text-gray-400">
        <p>&copy; 2025 DeepX. All rights reserved. | Powered by Innovation</p>
      </div>
    </footer>
  );
}

