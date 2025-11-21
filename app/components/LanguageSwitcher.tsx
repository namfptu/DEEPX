'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface LanguageOption {
  value: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { value: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { value: 'en', label: 'English', flag: '🇺🇸' }
];

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<'vi' | 'en'>(() => {
    const match = typeof document !== 'undefined'
      ? document.cookie.match(/(?:^|; )NEXT_LOCALE=([^;]+)/)
      : null;
    const value = match ? decodeURIComponent(match[1]) : 'vi';
    return value === 'en' ? 'en' : 'vi';
  });
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      const expires = new Date();
      expires.setFullYear(expires.getFullYear() + 1);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; expires=${expires.toUTCString()}`;
      setLocale(newLocale === 'en' ? 'en' : 'vi');
      router.refresh();
    });
  };

  const currentLanguage = languages.find(lang => lang.value === locale);

  return (
    <div className="relative group">
      {/* Button hiển thị ngôn ngữ hiện tại */}
      <button
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-200 hover:text-cyan-400 transition-colors border border-cyan-400/20 rounded-lg hover:border-cyan-400/40 bg-[#0f1218]/50 backdrop-blur-sm"
        disabled={isPending}
        aria-label="Change language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:block">{currentLanguage?.label}</span>
        <svg 
          className="w-4 h-4 transition-transform group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div className="absolute top-full right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 group-hover:translate-y-0 translate-y-2">
        <div className="bg-[#1a1f2e] border border-cyan-400/20 rounded-lg shadow-lg overflow-hidden backdrop-blur-md">
          {languages.map((language) => (
            <button
              key={language.value}
              onClick={() => handleLanguageChange(language.value)}
              disabled={language.value === locale || isPending}
              className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center gap-3 ${
                language.value === locale
                  ? 'bg-cyan-400/10 text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.label}</span>
              {language.value === locale && (
                <span className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
