import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['tr', 'en', 'de', 'fr', 'es', 'it', 'ru', 'ar', 'zh', 'ja'],
  defaultLocale: 'tr',
  localePrefix: 'always'
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);