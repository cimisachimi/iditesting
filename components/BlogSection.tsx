'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image'; // Impor komponen Image dari Next.js

// Definisikan tipe data untuk props BlogCard
interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readMoreText: string;
}

const BlogCard = ({ slug, title, excerpt, image, date, category, readMoreText }: BlogCardProps) => (
  <div
    data-aos="fade-up"
    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group h-full"
  >
    {/* Gambar Artikel */}
    <div className="relative w-full h-48 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      {/* Metadata: Kategori dan Tanggal */}
      <div className="mb-2">
        <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">{category}</span>
        <span className="text-gray-500 text-sm mx-2">•</span>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>

      {/* Judul Artikel */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow group-hover:text-brand-orange transition-colors">
        <Link href={`/blog/${slug}`}>
          {title}
        </Link>
      </h3>

      {/* Ringkasan Artikel */}
      <p className="text-gray-600 mb-6">{excerpt}</p>

      {/* Tombol "Read More" */}
      <div className="mt-auto">
        <Link
          href={`/blog/${slug}`}
          className="font-semibold text-brand-orange uppercase text-sm tracking-wider hover:underline"
        >
          {readMoreText} &rarr;
        </Link>
      </div>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  const t = useTranslations('blog');

  const slugs = [
    'global-market-trends-2025',
    'guide-international-shipping-indonesian-charcoal',
    'indonesian-advantage-worlds-best-coconut-charcoal'
  ];

  // Ambil semua data yang diperlukan dari file terjemahan
  const posts = slugs.map(slug => ({
    slug: slug,
    title: t(`${slug}.title`),
    excerpt: t(`${slug}.excerpt`),
    image: t(`${slug}.image`),
    date: t(`${slug}.date`),
    category: t(`${slug}.category`),
  }));

  return (
    <section id="blog" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-orange sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
        </div>

        {/* Grid untuk Postingan Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              {...post}
              readMoreText={t('readMore')}
            />
          ))}
        </div>

        {/* Tombol "View All Posts" */}
        <div className="text-center mt-16">
          <Link href="/blog" className="inline-block bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            {t('viewAllPosts')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;