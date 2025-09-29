// adamhadiwardoyo/idi/idi-35830ce3e10c25c43cbaab599c7ee58117901f70/app/sitemap.ts

import { MetadataRoute } from 'next';

const locales = ['en', 'de', 'ar', 'nl', 'zh', 'fr', 'ja'] as const;
const baseUrl = 'https://www.indocharcoalsupply.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    // ✅ FIX: Generate the correct URL for the default locale
    url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: new Date(),
  }));
}