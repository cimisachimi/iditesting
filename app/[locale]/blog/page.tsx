import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

// Komponen Kartu Blog untuk konsistensi
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
    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group h-full"
  >
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
      <div className="mb-2">
        <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">{category}</span>
        <span className="text-gray-500 text-sm mx-2">•</span>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 flex-grow group-hover:text-brand-orange transition-colors">
        <Link href={`/blog/${slug}`}>
          {title}
        </Link>
      </h3>
      <p className="text-gray-600 mb-6">{excerpt}</p>
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

// ✅ FIX: Define a Props type for the page component
type Props = {
  params: { locale: string };
};

// ✅ FIX: Added generateMetadata function for the blog index page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const baseUrl = 'https://www.indocharcoalsupply.com';
  const pageUrl = `${baseUrl}/${locale}/blog`;

  return {
    title: t('title'),
    description: 'Explore our latest articles, insights, and guides on the charcoal industry.',
    alternates: {
      canonical: pageUrl,
      languages: {
        'x-default': `${baseUrl}/en/blog`,
        ...Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}/blog`])
        ),
      },
    },
  };
}


export default async function BlogIndexPage({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  // Daftar slug artikel yang ingin ditampilkan di halaman ini
  const slugs = [
    'global-market-trends-2025',
    'guide-international-shipping-indonesian-charcoal',
    'indonesian-advantage-worlds-best-coconut-charcoal'
  ];

  const posts = slugs.map(slug => ({
    slug: slug,
    title: t(`${slug}.title`),
    excerpt: t(`${slug}.excerpt`),
    image: t(`${slug}.image`),
    date: t(`${slug}.date`),
    category: t(`${slug}.category`),
  }));

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-brand-orange sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest articles, insights, and guides on the charcoal industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                {...post}
                readMoreText={t('readMore')}
              />
            ))}
          </div>


          <div className="text-center mt-20">
            <Link
              href="/"
              className="inline-block bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              {t('backToHome')}
            </Link>
          </div>
          {/* ============================================== */}

        </div>
      </main>
      <Footer />
    </>
  );
}