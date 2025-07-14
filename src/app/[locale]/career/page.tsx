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
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 md:mb-16">
            {t('tagline')}
          </p>

          <section className="mb-8 sm:mb-12 md:mb-16">
            <div className="glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-accent">{t('whyUs.title')}</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {t('whyUs.description')}
              </p>
            </div>

            <div className="glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-accent">{t('whoWeSeek.title')}</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {t('whoWeSeek.description')}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{t('openPositions')}</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="glass glass-hover rounded-lg sm:rounded-xl p-5 sm:p-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] touch-manipulation">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Senior Full Stack Engineer</h3>
                <p className="text-sm sm:text-base text-gray-400">Remote • Full-time</p>
              </div>
              <div className="glass glass-hover rounded-lg sm:rounded-xl p-5 sm:p-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] touch-manipulation">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Product Designer</h3>
                <p className="text-sm sm:text-base text-gray-400">Remote • Full-time</p>
              </div>
              <div className="glass glass-hover rounded-lg sm:rounded-xl p-5 sm:p-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] touch-manipulation">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Data Scientist</h3>
                <p className="text-sm sm:text-base text-gray-400">Remote • Full-time</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}