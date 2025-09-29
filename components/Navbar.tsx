// components/Navbar.tsx

'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Logo from './ui/Logo';
import NavLink from './ui/Navlink';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ReactCountryFlag from 'react-country-flag';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const langRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('navbar');

  // ... (navLinks, localeNames, localeFlags, currentLocale do not need to be changed)
  const navLinks = useMemo(
    () => [
      { href: '/#home', label: t('home'), id: 'home' },
      { href: '/#our-values', label: t('ourValues'), id: 'our-values' },
      { href: '/#product', label: t('product'), id: 'product' },
      { href: '/#packaging', label: t('packaging'), id: 'packaging' },
      { href: '/#shipping', label: t('shipping'), id: 'shipping' },
      { href: '/#our-team', label: t('ourTeam'), id: 'our-team' },
      { href: '/#blog', label: t('blog'), id: 'blog' },
      { href: '/#contact', label: t('contact'), id: 'contact' },
    ],
    [t]
  );

  const localeNames: Record<string, string> = {
    en: 'English', de: 'Deutsch', ar: 'العربية', nl: 'Nederlands',
    zh: '中文', fr: 'Français', ja: '日本語',
  };

  const localeFlags: Record<string, string> = {
    en: 'US', de: 'DE', ar: 'SA', nl: 'NL', zh: 'CN', fr: 'FR', ja: 'JP',
  };

  const currentLocale =
    routing.locales.find((loc) => pathname.startsWith(`/${loc}`)) ||
    routing.defaultLocale;


  const changeLocale = (locale: string) => {
    const pathWithoutLocale = pathname.replace(
      new RegExp(`^/(${routing.locales.join('|')})`),
      ''
    );
    // Ensure path fallback to root if empty
    router.push(`/${locale}${pathWithoutLocale || '/'}`);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  // ... (useEffect for observer does not need to be changed)
  useEffect(() => {
    if (
      pathname === '/' ||
      routing.locales.some(
        (loc) => pathname === `/${loc}` || pathname === `/${loc}/`
      )
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-40% 0px -60% 0px', threshold: 0, }
      );
      navLinks.forEach((link) => {
        const sectionId = link.href.split('#')[1];
        const section = document.getElementById(sectionId);
        if (section) observer.observe(section);
      });
      return () => {
        navLinks.forEach((link) => {
          const sectionId = link.href.split('#')[1];
          const section = document.getElementById(sectionId);
          if (section) observer.unobserve(section);
        });
      };
    } else {
      setActiveSection('');
    }
  }, [pathname, navLinks]);


  return (
    <header
      className="fixed top-0 left-0 w-full z-50 h-16 lg:h-20
                 bg-zinc-900/90 backdrop-blur-md shadow-lg
                 transition-all duration-300 ease-in-out
                 rounded-b-[28px] md:rounded-b-[40px] lg:rounded-b-[48px]"
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        <Link href={`/${currentLocale}`}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center space-x-8 text-base">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={link.id === activeSection}
                onClick={() => { }}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div ref={langRef} className="relative z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen((s) => !s);
              }}
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-zinc-800/90 px-3 py-2.5 text-sm text-white hover:bg-zinc-700 focus:outline-none"
              aria-label={`Change language, current language is ${localeNames[currentLocale]}`}
            >
              <ReactCountryFlag
                countryCode={localeFlags[currentLocale] || 'US'}
                svg
                style={{ width: '1.1em', height: '1.1em' }}
                aria-label={localeNames[currentLocale]}
              />
              {/* ✅ hide text on mobile, show on sm+ */}
              <span className="hidden sm:inline truncate max-w-[80px]">
                {localeNames[currentLocale]}
              </span>
              <svg
                className={`ml-1 h-4 w-4 shrink-0 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLangOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 mt-3 w-40 rounded-xl border border-white/10 bg-zinc-800/95 shadow-xl backdrop-blur"
              >
                {routing.locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => changeLocale(loc)}
                    className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-white hover:bg-zinc-700"
                  >
                    <ReactCountryFlag
                      countryCode={localeFlags[loc] || 'US'}
                      svg
                      style={{ width: '1.1em', height: '1.1em' }}
                      aria-label={localeNames[loc]}
                    />
                    <span className="truncate">{localeNames[loc]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (no changes needed) */}
      {isMenuOpen && (
        <nav
          className="absolute top-16 left-0 w-full bg-zinc-900/95 backdrop-blur-md 
               shadow-lg rounded-b-2xl z-40 flex flex-col items-center py-6"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={link.id === activeSection}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;