import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 animate-pulse"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6 md:mb-8 inline-block">
              <div className="glass px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium">
                <span className="gradient-accent">{t('hero.badge')}</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/career" className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:scale-110"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t('hero.cta')}
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <a href="#what-we-do" className="glass glass-hover px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg w-full sm:w-auto">
                {t('hero.learnMore')}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t('whatWeDo.title')}</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('whatWeDo.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              {t('whatWeDo.description')}
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">{t('howWeWork.title')}</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                {t('howWeWork.subtitle')}
              </p>
            </div>

            {/* Revamped Model Card */}
            <div className="glass rounded-2xl p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="text-center flex-shrink-0">
                  <div className="w-40 h-40 rounded-full glass flex items-center justify-center shadow-lg">
                    <div className="text-6xl font-bold gradient-accent">50%</div>
                  </div>
                  <p className="text-lg mt-4 text-gray-300">{t('howWeWork.model.label')}</p>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('howWeWork.model.title')}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {t('howWeWork.model.description')}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {t('howWeWork.model.note')}
                  </p>
                </div>
              </div>
            </div>

            {/* Revamped Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">{t('howWeWork.stats.tech')}</h4>
                <div className="text-5xl font-bold gradient-accent">80%</div>
              </div>
              <div className="glass rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">{t('howWeWork.stats.impact')}</h4>
                <div className="text-5xl font-bold gradient-accent">20%</div>
              </div>
              <div className="glass rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">{t('howWeWork.stats.pragmatic')}</h4>
                <div className="text-5xl font-bold gradient-accent">100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
              <span className="gradient-text">{t('joinUs.title')}</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
              {t('joinUs.subtitle')}
            </p>

            <div className="glass rounded-2xl p-8 md:p-12 mb-8">
              <div className="mb-8">
                <div className="inline-block glass px-6 py-3 rounded-full mb-6">
                  <span className="text-lg md:text-xl font-semibold gradient-accent">
                    {t('joinUs.comingSoon.badge')}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('joinUs.comingSoon.title')}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {t('joinUs.comingSoon.description')}
                </p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-gray-400 mb-4">{t('joinUs.contact.label')}</p>
                <a
                  href="mailto:careers@bulutlabs.com"
                  className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold gradient-accent hover:scale-105 transition-transform"
                >
                  careers@bulutlabs.com
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass rounded-xl p-6">
                <h4 className="font-bold mb-2 text-lg">{t('joinUs.lookingFor.ai.title')}</h4>
                <p className="text-sm text-gray-400">{t('joinUs.lookingFor.ai.description')}</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h4 className="font-bold mb-2 text-lg">{t('joinUs.lookingFor.builders.title')}</h4>
                <p className="text-sm text-gray-400">{t('joinUs.lookingFor.builders.description')}</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h4 className="font-bold mb-2 text-lg">{t('joinUs.lookingFor.thinkers.title')}</h4>
                <p className="text-sm text-gray-400">{t('joinUs.lookingFor.thinkers.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 relative border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('contact.title')}</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:info@bulutlabs.com"
                className="glass glass-hover px-6 py-3 rounded-lg font-semibold"
              >
                {t('contact.general')}
              </a>
              <Link
                href="/contact"
                className="glass glass-hover px-6 py-3 rounded-lg font-semibold"
              >
                {t('contact.more')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
