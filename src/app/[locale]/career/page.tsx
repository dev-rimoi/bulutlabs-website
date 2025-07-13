import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CareerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Career');

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-2xl text-gray-400 mb-16">
            {t('tagline')}
          </p>

          <section className="mb-16">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('whyUs.title')}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('whyUs.description')}
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">{t('whoWeSeek.title')}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('whoWeSeek.description')}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">{t('openPositions')}</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">Senior Full Stack Engineer</h3>
                <p className="text-gray-400">Remote • Full-time</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">Product Designer</h3>
                <p className="text-gray-400">Remote • Full-time</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">Data Scientist</h3>
                <p className="text-gray-400">Remote • Full-time</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}