'use client';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Type Definition for Testimonial ---
interface Testimonial {
  id: number;
  name: string;
  title: string;
  message: string;
}

// --- Star Icon Component ---
const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// --- TestimonialCard Component ---
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white/90 p-8 rounded-lg shadow-md flex flex-col h-full text-left border border-gray-200">
    <div className="flex mb-4">
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
    <p className="text-gray-600 mb-6 flex-grow">&ldquo;{testimonial.message}&rdquo;</p>
    <div>
      <p className="font-bold text-gray-900">{testimonial.name}</p>
      <p className="text-sm text-gray-500">{testimonial.title}</p>
    </div>
  </div>
);

// --- Main Testimonials Component ---
const Testimonials: React.FC = () => {
  const t = useTranslations('testimonialsSection');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://api.indocharcoalsupply.com/api/testimonials');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming the API returns data in a 'data' property for pagination
        setTestimonials(data.data || data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section
      id={t('sectionId')}
      className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32"
      style={{ backgroundImage: "url('/prod-cover.webp')" }}
    >
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
          {t('title')}
        </h2>

        {loading && <p>Loading testimonials...</p>}
        {error && <p className="text-red-500">Failed to load testimonials: {error}</p>}

        {!loading && !error && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonials;