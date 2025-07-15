import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('HomePage');

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6 md:mb-8 inline-block">
              <div className="glass px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium">
                <span className="gradient-accent">✨ {t('hero.badge')}</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:scale-110"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t('hero.cta')}
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button className="glass glass-hover px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg w-full sm:w-auto">
                {t('hero.video')}
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="gradient-text">{t('proof.title')}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
                {t('proof.description')}
              </p>
            </div>
            
            <div className="glass rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 md:mb-12">
                  <div className="text-center md:text-left">
                    <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">{t('proof.totalValue')}</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold gradient-accent">₺0</p>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">{t('proof.campaigns')}</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold gradient-accent">1</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a href="#" className="group inline-flex items-center gap-2 glass glass-hover px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base">
                    {t('proof.cta')}
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 px-4 sm:px-0">
              <span className="gradient-text">{t('team.title')}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4 sm:px-0">
              {t('team.description')}
            </p>
            
            <div className="inline-block">
              <a href="/career" className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg">
                <div className="absolute inset-0 glass rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{t('team.cta')}</span>
                <svg className="relative z-10 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}