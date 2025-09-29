import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Packaging: React.FC = () => {
  const t = useTranslations('packaging');

  return (
    <section id="packaging" className="bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/charcoal-bg.webp')" }}
      />
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-300/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-300/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-8 leading-tight">
          {t('title')}
          <span className="block mx-auto w-fit bg-brand-orange text-white text-base lg:text-lg font-semibold px-4 py-2 rounded-full mt-4">
            {t('yourBrandourPackaging')}
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-stretch mt-16">
          {/* Master Box Section */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-72 w-full max-w-sm mb-8 rounded-2xl flex items-center justify-center p-6 border border-gray-100">
              <Image
                src="/packaging/masterbox.webp"
                alt={t('masterAlt')}
                fill
                // ✅ FIX: Added sizes prop
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className="p-2"
              />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-800 mb-3 uppercase tracking-wide">{t('masterTitle')}</h3>
            <p className="text-gray-700 mb-6 max-w-md leading-relaxed">{t('masterDescription')}</p>
            <h4 className="font-semibold text-gray-700 text-lg mb-4">{t('masterAvailable')}</h4>
            <ul className="flex justify-center gap-x-6 gap-y-3 flex-wrap text-lg font-medium">
              <li className="bg-brand-orange/10 text-brand-orange font-bold px-6 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">{t('masterSize10')}</li>
              <li className="bg-brand-orange/10 text-brand-orange font-bold px-6 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">{t('masterSize12')}</li>
              <li className="bg-brand-orange/10 text-brand-orange font-bold px-6 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">{t('masterSize15')}</li>
              <li className="bg-brand-orange/10 text-brand-orange font-bold px-6 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">{t('masterSize20')}</li>
            </ul>
          </div>

          {/* Inner Box Section */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-72 w-full max-w-sm mb-8 rounded-2xl flex items-center justify-center p-6 border border-gray-100">
              <Image
                src="/packaging/innerbox.webp"
                alt={t('innerAlt')}
                fill
                // ✅ FIX: Added sizes prop
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className="p-6"
              />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-800 mb-3 uppercase tracking-wide">{t('innerTitle')}</h3>
            <p className="text-gray-700 mb-6 max-w-md leading-relaxed">{t('innerDescription')}</p>
            <h4 className="font-semibold text-gray-700 text-lg mb-4">{t('innerAvailable')}</h4>
            <ul className="flex justify-center gap-x-6 gap-y-3 flex-wrap text-lg font-medium">
              <li className="bg-brand-orange/10 text-brand-orange font-bold px-6 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">{t('innerSize1to2')}</li>
              <li className="bg-brand-orange/10 text-brand-orange font-bold px-6 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">{t('innerSize250to500')}</li>
            </ul>
          </div>
        </div>

        {/* Customization Footer Banner */}
        <div className="mt-28 w-full max-w-6xl mx-auto">
          <div className="bg-zinc-800 rounded-3xl shadow-2xl p-8 md:p-14 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-white text-center md:text-left max-w-2xl">
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">
                  {t('customPackagingTitle')}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t('customizationText')} {t('customizationSuffix')}
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#contact"
                  className="inline-block bg-brand-orange text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('customizationContact') || 'Contact us'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;