// components/VisionMission.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// SVG Icons
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 10-7.07 0M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);
const IconList = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div data-aos="fade-up" className="bg-gray-50/80 rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:text-left md:gap-5">
    <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-brand-orange/10 flex items-center justify-center">
      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-brand-orange flex items-center justify-center text-white">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-gray-600 space-y-2 leading-relaxed">{children}</div>
    </div>
  </div>
);

const VisionMission: React.FC = () => {
  const t = useTranslations('vision');

  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="bg-white pt-32 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center lg:items-start">
          <div data-aos="fade-right" className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[550px] rounded-3xl overflow-hidden ">
            <Image
              src="/globe11.webp"
              alt="Glowing hookah charcoal in a metal holder"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            <h2 data-aos="fade-left" className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 lg:mb-12 text-center lg:text-left">
              {t('title')}
            </h2>
            <div className="space-y-6">
              <InfoCard icon={<IconTarget />} title={t('visionTitle')}>
                <p>{t('vision')}</p>
              </InfoCard>
              <InfoCard icon={<IconList />} title={t('missionTitle')}>
                <ul className="list-disc list-outside pl-5 space-y-2 text-left">
                  <li>{t("mission1")}</li>
                  <li>{t("mission2")}</li>
                  <li>{t("mission3")}</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;