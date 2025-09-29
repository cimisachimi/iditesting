'use client';
//fix the testimonial
import React from 'react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Data Testimoni ---
const testimonialsData = [
  {
    quote: 'Our first shipment of briquettes from Indo Charcoal Supply was a massive success. The quality is consistently high, and the packaging held up perfectly during the long transit. Their team is extremely professional and made the entire export process feel effortless. We are very satisfied!',
    author: 'Noah Thompson',
    location: 'Australia',
  },
  {
    quote: 'We were looking for a reliable charcoal supplier for our restaurants, and Indo Charcoal Supply exceeded our expectations. The briquettes burn hot and long, which is crucial for our business. The communication and logistics support they provided were top-notch. Highly recommended for international buyers.',
    author: 'Sophie Bakker',
    location: 'Netherland',
  },
  {
    quote: 'Navigating international trade can be complex, but working with Indo Charcoal Supply was a breeze. They handled all the documentation and ensured our order arrived on time. The quality of their coconut charcoal is simply unmatched. Our clients are thrilled with the product. A fantastic business partner.',
    author: 'David Rodriguez',
    location: 'Spain',
  },
  {
    quote: 'We have been in the charcoal business for decades, and we can confidently say that the quality of Indo Charcoal Supply’s briquettes is among the best we have ever sourced. Their production capacity and efficiency in fulfilling large orders is truly impressive. We look forward to a long-term partnership.',
    author: 'Ahmed Al-Farsi',
    location: 'United Arab Emirates',
  },
  {
    quote: 'Finding sustainable and high-quality briquettes is a top priority for us. Indo Charcoal Supply meets both criteria perfectly. The product is environmentally friendly and the performance is excellent. Their commitment to customer service is what truly sets them apart. A reliable and trustworthy partner for our growing market.',
    author: 'Sophie De Vries',
    location: 'Belgium',
  },
  {
    quote: 'Working with Indo Charcoal Supply has streamlined our supply chain significantly. Their attention to detail, from product quality to secure shipping, is exceptional. The briquettes have been a big hit with our wholesale clients. It is a pleasure doing business with such a professional and dedicated team.',
    author: 'Omar Hassan',
    location: 'Egypt',
  },
  {
    quote: 'The quality of the charcoal briquettes we received from Indo Charcoal Supply is fantastic. They burn for a long time without much ash, which is exactly what our customers need. The team was very supportive throughout the entire export process. We are excited about our future orders.',
    author: 'Isabella Rossi',
    location: 'Italy',
  },
  {
    quote: 'Reliability is key in our business, and Indo Charcoal Supply has proven to be a reliable partner. Their briquettes meet all our quality standards, and they have been very efficient with their shipments. The consistent product quality has helped us build trust with our customers.',
    author: 'Oliver Thompson',
    location: 'New Zealand',
  },
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

type TestimonialCardProps = {
  quote: string;
  author: string;
  location: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, location }) => (
  <div className="bg-white/90 p-8 rounded-lg shadow-md flex flex-col h-full text-left border border-gray-200">
    <div className="flex mb-4">
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
    <p className="text-gray-600 mb-6 flex-grow">&ldquo;{quote}&rdquo;</p>
    <div>
      <p className="font-bold text-gray-900">{author}</p>
      <p className="text-sm text-gray-500">{location}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const t = useTranslations('testimonialsSection');

  return (
    <section
      id={t('sectionId')}
      className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32"
      style={{ backgroundImage: "url('/prod-cover.webp')" }}
    >
      {/* Overlay putih transparan */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Konten */}
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
          {t('title')}
        </h2>
        
        {/* Swiper Carousel */}
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
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
