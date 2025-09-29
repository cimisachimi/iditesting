"use client";

import React, { ReactNode, ReactElement } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/* --- Types --- */
interface InfoCardProps {
  icon: ReactElement;
  title: string;
  children: ReactNode;
}

// The 'ShippingContainerImageProps' interface was removed as it was unused.

/* --- Reusable Components --- */
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => (
  <div
    data-aos="fade-up"
    data-aos-once="true"
    className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="flex-shrink-0 grid h-12 w-12 place-content-center rounded-full bg-brand-orange/10 text-brand-orange">
        {icon}
      </div>
      <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h3>
    </div>
    <div className="text-gray-600 space-y-4 leading-relaxed">{children}</div>
  </div>
);

/* --- Icons --- */
const IconShipping = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 16h2a2 2 0 002-2V7a2 2 0 00-2-2h-3.382a1 1 0 00-.894.553L12 8"
    />
  </svg>
);

const IconGuide = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 1 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const ShippingContainerImage: React.FC<{ alt: string }> = ({ alt }) => (
  <div
    data-aos="fade-right"
    data-aos-once="true"
    className="w-full flex items-center justify-center"
  >
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden">
      <Image
        src="/kontainer.png"
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        priority
      />
    </div>
  </div>
);

/* --- Main Section --- */
const Shipping = () => {
  const t = useTranslations("shipping");

  return (
    <section id="shipping" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ShippingContainerImage alt={t("containerAlt")} />
          <div className="flex flex-col gap-8">
            <InfoCard icon={<IconShipping />} title={t("aboutTitle")}>
              <p>{t("aboutParagraph1")}</p>
              <p>{t("aboutParagraph2")}</p>
            </InfoCard>
            <InfoCard icon={<IconGuide />} title={t("guideTitle")}>
              <p>{t("guideParagraph")}</p>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;