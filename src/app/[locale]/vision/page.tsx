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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-16">
            {t('title')}
          </h1>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('brokenModel.title')}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('brokenModel.content')}
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('catalyst.title')}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('catalyst.content')}
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{t('engine.title')}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('engine.content')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}