import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CareerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Career');

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">{t('title')}</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-12">
          {t('description')}
        </p>

        <div className="space-y-10 text-left">
          {/* Thinkers Section */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 gradient-accent">{t('thinkers.title')}</h2>
            <p className="text-gray-300 text-lg mb-4">{t('thinkers.question')}</p>
            <p className="text-sm text-gray-400">{t('thinkers.prompt')}</p>
          </div>

          {/* Builders Section */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 gradient-accent">{t('builders.title')}</h2>
            <p className="text-gray-300 text-lg mb-4">{t('builders.question')}</p>
            <p className="text-sm text-gray-400">{t('builders.prompt')}</p>
          </div>

          {/* AI Enthusiasts Section */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 gradient-accent">{t('ai_enthusiasts.title')}</h2>
            <p className="text-gray-300 text-lg mb-4">{t('ai_enthusiasts.question')}</p>
            <p className="text-sm text-gray-400">{t('ai_enthusiasts.prompt')}</p>
          </div>
        </div>

        <div className="mt-12 glass rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {t('contact.description')}
          </p>
          <a
            href="mailto:join@bulutlabs.com?subject=A new conversation"
            className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold gradient-accent hover:scale-105 transition-transform"
          >
            join@bulutlabs.com
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="mt-16">
          <Link
            href={`/${locale}`}
            className="glass glass-hover px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('backHome')}
          </Link>
        </div>

      </div>
    </div>
  );
}
