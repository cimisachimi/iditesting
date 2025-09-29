'use client';
import React from "react";
import { useTranslations } from "next-intl";

const LocationMap: React.FC = () => {
  const t = useTranslations("location");

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65100.8996016666!2d110.34813238201151!3d-7.792446326971951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599776e6106f%3A0x20bdbbe67a545403!2sIndocharcoalsupply!5e0!3m2!1sen!2sid!4v1756979870049!5m2!1sen!2sid";

  const mapsLink = "https://maps.app.goo.gl/8vF5ZarJ3CUZzUYs9";

  return (
    <section id="location" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-12">
          {t("title")}
        </h2>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-xl shadow-lg border border-gray-200 w-full h-[450px]"
          aria-label={t("ariaLabel")}
        >
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("iframeTitle")}
          />
        </a>
      </div>
    </section>
  );
};

export default LocationMap;
