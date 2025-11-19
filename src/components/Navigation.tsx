'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="gradient-accent">Bulut Labs</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {t('home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/career"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {t('career')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {t('contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="ml-4 pl-4 border-l border-gray-800">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black z-50">
          <div className="glass h-full overflow-y-auto">
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/career"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('career')}
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
