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
            <h2 className="text-3xl font-bold mb-4">{t('criteria.title')}</h2>
            <p className="text-lg text-gray-300">
              {t('criteria.description')}
            </p>
          </section>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
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
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
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
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
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
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-white text-gray-950 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}