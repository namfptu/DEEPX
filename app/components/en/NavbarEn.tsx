'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from '../LanguageSwitcher';

export default function NavbarEn() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Values', href: '#values' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-1000 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(15,18,24,0.95)] shadow-lg'
          : 'bg-[rgba(15,18,24,0.95)]'
      }`}
      style={{
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 5px 30px rgba(0, 217, 255, 0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-5 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold">
          <div className="w-10 h-10 border-2 border-transparent bg-gradient-to-r from-cyan-400 to-blue-600 rounded flex items-center justify-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-bold">
              D
            </span>
          </div>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            DEEPX
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-200 hover:text-cyan-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f1218] border-t border-cyan-400/10">
          <ul className="flex flex-col gap-4 p-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-200 hover:text-cyan-400 transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

