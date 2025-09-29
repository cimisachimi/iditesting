"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
const images = [
  '/gallery/gallery1.webp',
  '/gallery/gallery2.webp',
  '/gallery/gallery3.webp',
  '/gallery/gallery4.webp',
  '/gallery/galerry5.webp',
  '/gallery/gallery6.webp',
];

const GallerySlider: React.FC = () => {

  const t = useTranslations('gallery');

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setItemsPerPage(1);
    } else {
      setItemsPerPage(2);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const maxSlideIndex = images.length > itemsPerPage ? images.length - itemsPerPage : 0;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi]);

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="bg-zinc-800 w-full py-24 sm:py-32">
      {/* Re-added container and max-width for a balanced size */}
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold text-brand-orange sm:text-4xl lg:text-5xl text-center mb-12">
          {t('title')}
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {images.map((src, idx) => (
                <motion.div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_50%]"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg mx-2">
                    <Image
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-0 md:-left-5 -translate-y-1/2 z-10 grid h-12 w-12 place-content-center rounded-full bg-white/80 text-gray-700 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-0 md:-right-5 -translate-y-1/2 z-10 grid h-12 w-12 place-content-center rounded-full bg-white/80 text-gray-700 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-6 gap-4">
          {Array.from({ length: maxSlideIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              className={`h-4 w-4 rounded-full transition-all duration-300 ${idx === current ? 'bg-orange-500 scale-125' : 'bg-gray-400 hover:bg-gray-500'}`}
              aria-current={idx === current ? 'true' : 'false'}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;