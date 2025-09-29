"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

// Single card component
const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10 transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center mb-4">
      <div className="flex-shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </div>
);

const OurValues: React.FC = () => {
  const t = useTranslations("values");
  const [showAll, setShowAll] = useState(false);

  const values = [
    { icon: <IconIntegrity />, title: t("integrityTitle"), description: t("integrityDescription") },
    { icon: <IconQuality />, title: t("qualityTitle"), description: t("qualityDescription") },
    { icon: <IconInnovation />, title: t("innovationTitle"), description: t("innovationDescription") },
    { icon: <IconCustomerSatisfaction />, title: t("satisfactionTitle"), description: t("satisfactionDescription") },
    { icon: <IconCustomerService />, title: t("serviceTitle"), description: t("serviceDescription") },
    { icon: <IconCooperation />, title: t("cooperationTitle"), description: t("cooperationDescription") },
  ];

  // Mobile: tampil 3 atau semua sesuai toggle
  const mobileValues = showAll ? values : values.slice(0, 3);

  return (
    <section className="relative bg-zinc-900 text-white py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/charcoal-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-950 opacity-50" />

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12">
          {t("ourValue")}
        </h2>

        {/* Mobile version (with show more) */}
        <div className="grid grid-cols-1 gap-8 sm:hidden">
          {mobileValues.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

        {/* Desktop & Tablet version (always show all) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

        {/* Toggle button hanya muncul di mobile */}
        <div className="mt-8 sm:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold shadow-lg hover:bg-orange-600 transition-colors"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

// SVG Icons
const IconIntegrity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconQuality = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconInnovation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconCustomerSatisfaction = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconCustomerService = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const IconCooperation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 016-5.197M12 12a4 4 0 110-8 4 4 0 010 8z" />
  </svg>
);

export default OurValues;
