import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function VisionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Vision');

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16">
            <span className="gradient-text">{t('title')}</span>
          </h1>

          <section className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 gradient-accent">{t('brokenModel.title')}</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {t('brokenModel.content')}
            </p>
          </section>

          <section className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 gradient-accent">{t('catalyst.title')}</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {t('catalyst.content')}
            </p>
          </section>

          <section className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 gradient-accent">{t('engine.title')}</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {t('engine.content')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}