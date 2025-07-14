'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsJoinUsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/vision"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {t('vision')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/model"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {t('model')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              {t('projects')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div className="relative" ref={dropdownRef}>
              <Link
                href="/join-us"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setIsJoinUsOpen(true)}
              >
                {t('joinUs')}
                <svg
                  className={`w-4 h-4 transition-transform ${isJoinUsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {isJoinUsOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 glass rounded-md shadow-lg"
                  onMouseLeave={() => setIsJoinUsOpen(false)}
                >
                  <div className="py-1">
                    <Link
                      href="/career"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {t('career')}
                    </Link>
                    <Link
                      href="/invest"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {t('investorRelations')}
                    </Link>
                    <Link
                      href="/propose-project"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {t('proposeProject')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t('contact')}
            </Link>
            
            <div className="ml-4 pl-4 border-l border-gray-800">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
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
        <div className="lg:hidden fixed inset-0 top-16 md:top-20 bg-black z-50">
          <div className="glass h-full overflow-y-auto">
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/vision"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('vision')}
              </Link>
              <Link
                href="/model"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('model')}
              </Link>
              <Link
                href="/projects"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('projects')}
              </Link>
              
              <div className="border-t border-white/10 my-2"></div>
              
              <Link
                href="/join-us"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('joinUs')}
              </Link>
              <Link
                href="/career"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all pl-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('career')}
              </Link>
              <Link
                href="/invest"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all pl-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('investorRelations')}
              </Link>
              <Link
                href="/propose-project"
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all pl-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('proposeProject')}
              </Link>
              
              <div className="border-t border-white/10 my-2"></div>
              
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