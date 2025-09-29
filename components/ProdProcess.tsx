"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductionProcess = () => {
  const t = useTranslations("prodProcess");

  const processSteps = [
    { id: "01", icon: "/prod-icon/mount.svg", title: t("sourcingTitle"), description: t("sourcingDescription") },
    { id: "02", icon: "/prod-icon/sun.svg", title: t("dryingTitle"), description: t("dryingDescription") },
    { id: "03", icon: "/prod-icon/bike.svg", title: t("carbonizationTitle"), description: t("carbonizationDescription") },
    { id: "04", icon: "/prod-icon/double.svg", title: t("crushingTitle"), description: t("crushingDescription") },
    { id: "05", icon: "/prod-icon/mix.svg", title: t("mixingTitle"), description: t("mixingDescription") },
    { id: "06", icon: "/prod-icon/arrow.svg", title: t("moldingTitle"), description: t("moldingDescription") },
    { id: "07", icon: "/prod-icon/sun 2.svg", title: t("finalDryingTitle"), description: t("finalDryingDescription") },
    { id: "08", icon: "/prod-icon/shield.svg", title: t("qualityControlTitle"), description: t("qualityControlDescription") },
    { id: "09", icon: "/prod-icon/package.svg", title: t("packagingTitle"), description: t("packagingDescription") },
    { id: "10", icon: "/prod-icon/safe.svg", title: t("storageTitle"), description: t("storageDescription") },
  ];

  const [openStep, setOpenStep] = useState<string | null>("01");
  const [showAll, setShowAll] = useState(false);

  const toggleStep = (id: string) => {
    setOpenStep(openStep === id ? null : id);
  };

  // kalau showAll = false → tampilkan 3 step pertama
  const visibleSteps = showAll ? processSteps : processSteps.slice(0, 3);

  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#ff5328]">
          {t("title")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">{t("description")}</p>

        {/* =============================================================== */}
        {/* Mobile View: Accordion (visible below lg breakpoint)            */}
        {/* =============================================================== */}
        <div className="lg:hidden space-y-3">
          {visibleSteps.map((step) => (
            <div key={step.id} className="rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-100">
                    <Image
                      src={step.icon}
                      alt={`${step.title} icon`}
                      width={24}
                      height={24}
                      className="filter invert-[39%] sepia-[98%] saturate-[2976%] hue-rotate-[359deg] brightness-[97%] contrast-[101%]"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">{step.title}</h3>
                </div>
                <ChevronDownIcon
                  className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${
                    openStep === step.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openStep === step.id ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-4 pt-2">
                  <p className="text-sm text-gray-600 text-left">{step.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Show More / Less button */}
          <div className="mt-6">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="w-full bg-orange-500 text-white rounded-lg py-3 font-semibold shadow-md 
                           hover:bg-orange-600 transition duration-300"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="w-full bg-gray-200 text-gray-800 rounded-lg py-3 font-semibold shadow-md 
                           hover:bg-gray-300 transition duration-300"
              >
                Show Less
              </button>
            )}
          </div>
        </div>

        {/* =============================================================== */}
        {/* Desktop View: Enhanced Grid (hidden below lg breakpoint)       */}
        {/* =============================================================== */}
        <div className="hidden lg:grid gap-x-6 gap-y-16 lg:grid-cols-5 mt-10">
          {processSteps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center pt-8">
              {/* Step number */}
              <div className="absolute top-0 flex items-center justify-center w-16 h-16 bg-white border-2 border-orange-200 text-orange-500 font-extrabold text-2xl rounded-full">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                <Image
                  src={step.icon}
                  alt={`${step.title} icon`}
                  width={36}
                  height={36}
                  className="filter invert-[39%] sepia-[98%] saturate-[2976%] hue-rotate-[359deg] brightness-[97%] contrast-[101%]"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
