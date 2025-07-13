'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-accent">Bulut Labs</span>
          </Link>

          <div className="flex items-center gap-8">
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
                  className="absolute left-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-md shadow-lg"
                  onMouseLeave={() => setIsJoinUsOpen(false)}
                >
                  <div className="py-1">
                    <Link
                      href="/career"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      {t('career')}
                    </Link>
                    <Link
                      href="/invest"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      {t('investorRelations')}
                    </Link>
                    <Link
                      href="/propose-project"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
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
        </div>
      </div>
    </nav>
  );
}