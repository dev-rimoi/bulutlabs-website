import { routing } from './i18n/routing';

export const locales = routing.locales;
export type Locale = (typeof locales)[number];

export const defaultLocale = routing.defaultLocale;

export const localeNames: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
  ar: 'العربية',
  zh: '中文',
  ja: '日本語'
};