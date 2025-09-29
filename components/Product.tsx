"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl'

// --- Defines the structure for a product specification item ---
interface SpecificationItem {
  label: string;
  value: string;
}

// --- Defines the structure for a single image with its shape name ---
interface ProductImage {
  src: string;
  shape: string;
}

// --- Defines the structure for a product ---
interface Product {
  id: string;
  type: string;
  images: ProductImage[]; // Now an array of objects
  specifications: SpecificationItem[];
}

// --- ProductCard component with shape names on images ---
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi]);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col p-6 border border-gray-100 h-full"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
    >
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{product.type}</h3>

      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {product.images.map((image, index) => (
            <div className="relative flex-[0_0_100%] aspect-square" key={index}>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {image.shape}
              </div>
              <Image
                src={image.src}
                alt={`${product.type} - ${image.shape}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
          ))}
        </div>

        {product.images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-content-center rounded-full bg-white/60 text-gray-600 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-content-center rounded-full bg-white/60 text-gray-600 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {product.images.length > 1 && (
        <div className="flex justify-center space-x-2 my-4 z-10">
          {product.images.map((_, idx) => (
            <button
              key={idx}
              className={`block h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${idx === selectedIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'}`}
              onClick={() => scrollTo(idx)}
              aria-current={idx === selectedIndex ? 'true' : 'false'}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col flex-grow">
        <h4 className="text-sm font-bold text-gray-500 mb-3 tracking-wider text-left">SPECIFICATIONS</h4>
        <ul className="space-y-0 text-gray-700">
          {product.specifications.map((spec, index) => (
            <li key={index} className="flex justify-between items-center text-sm py-3 border-b border-gray-100 last:border-b-0">
              <span className="font-medium text-gray-600 uppercase">{spec.label}</span>
              <span className="font-semibold">{spec.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// --- Main Products component ---
const Products: React.FC = () => {
  const t = useTranslations('product');

  const products: Product[] = [
    {
      id: 'shisha-briquette',
      type: t('shishaType'),
      images: [
        { src: '/coal-shape/cube.webp', shape: t('shishaCube') },
        { src: '/coal-shape/cube-high-temperature.webp', shape: t('shishaHighTemperature') },
        { src: '/coal-shape/cloud.webp', shape: t('shishaCloud') },
        { src: '/coal-shape/flat.webp', shape: t('shishaFlat') },
        { src: '/coal-shape/cube-high-flow.webp', shape: t('shishaHighFlow') },
      ],
      specifications: [
        { label: t('specAsh'), value: '2,0% - 2,5%' },
        { label: t('specBurning'), value: '2 - 2,5 HOURS' },
        { label: t('specCaloric'), value: '7000 - 7500 Kcal' },
        { label: t('specMoisture'), value: '7% - 10%' },
        { label: t('specFixedCarbon'), value: '70% - 85%' },
      ],
    },
    {
      id: 'bbq-briquette',
      type: t('bbqType'),
      images: [
        { src: '/coal-shape/octa.webp', shape: t('bbqOcta') },
        { src: '/coal-shape/dome.webp', shape: t('bbqDome') },
        { src: '/coal-shape/hexa.webp', shape: t('bbqHexa') },
        { src: '/coal-shape/finger.webp', shape: t('bbqFinger') },
      ],
      specifications: [
        { label: t('specAsh'), value: '7% - 8%' },
        { label: t('specBurning'), value: '5 - 6 HOURS' },
        { label: t('specCaloric'), value: '6400 - 8800 Kcal' },
        { label: t('specMoisture'), value: '4% - 7%' },
        { label: t('specFixedCarbon'), value: '70% - 85%' },
      ],
    },
  ];

  return (
    <section id="product" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-brand-orange sm:text-4xl lg:text-5xl mb-12">
          {t('productTitle')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <div className="mt-24 w-full max-w-5xl mx-auto">
          <div className="bg-zinc-800 rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {t('customTitle')}
                </h3>
                <p className="text-white/80 max-w-lg">
                  {t('customDescription')}
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <a
                  href="#contact"
                  className="inline-block bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-opacity duration-300"
                >
                  {t('customButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;