'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ProposeProjectPage() {
  const t = useTranslations('ProposeProject');
  const [formData, setFormData] = useState({
    problem: '',
    solution: '',
    revenue: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 md:mb-16">
            {t('subtitle')}
          </p>

          <section className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-accent">{t('criteria.title')}</h2>
            <p className="text-base sm:text-lg text-gray-300">
              {t('criteria.description')}
            </p>
          </section>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.problem')}
              </label>
              <textarea
                id="problem"
                name="problem"
                rows={4}
                value={formData.problem}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg sm:rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="solution" className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.solution')}
              </label>
              <textarea
                id="solution"
                name="solution"
                rows={4}
                value={formData.solution}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg sm:rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.revenue')}
              </label>
              <textarea
                id="revenue"
                name="revenue"
                rows={3}
                value={formData.revenue}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg sm:rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-300 mb-2">
                {t('form.contact')}
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg sm:rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-gray-950 px-6 sm:px-8 py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 touch-manipulation"
            >
              {t('form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}