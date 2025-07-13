import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function InvestPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Invest');

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-2xl text-gray-400 mb-16">
            {t('subtitle')}
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t('whyStrategic.title')}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('whyStrategic.content')}
              </p>
            </div>
          </section>

          <section className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <p className="text-lg text-gray-300 mb-6">
              {t('cta.text')}
            </p>
            <a 
              href={`mailto:${t('cta.email')}`}
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('cta.email')}
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}