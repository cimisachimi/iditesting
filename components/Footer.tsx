'use client';
import React from 'react';
import Logo from './ui/Logo';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('footer');

  const footerLinks = [
    { href: '#home', label: t('links.home') },
    { href: '#product', label: t('links.product') },
    { href: '#our-values', label: t('links.ourValues') },
    { href: '#product-profile', label: t('links.productProfile') },
    { href: '#packaging', label: t('links.packaging') },
    { href: '#shipping', label: t('links.shipping') },
  ];

  return (
    <footer id="contact" className="bg-zinc-900 text-white/70">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4 md:text-left">
          {/* Column 1: Logo and About */}
          <div className="md:col-span-1">
            <div className="flex justify-center md:justify-start mb-4">
              <Logo />
            </div>
            <p className="text-sm">{t('about')}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider">
              {t('contactUs')}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <IconAddress />
                <span className="flex-1">{t('address')}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <IconEmail />
                <a
                  href="mailto:info@indocharcoalsupply.com"
                  className="hover:text-white"
                >
                  info@indocharcoalsupply.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <IconPhone />
                <a
                  href="https://wa.me/6289687199099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  +62 896-8719-9099
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider">
              {t('followUs')}
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61570964318471"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/indocharcoalsupply"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/adam-billah-144b78342/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.youtube.com/@indocharcoalsupply"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Indo Charcoal Supply. {t('rights')}
        </div>
      </div>
    </footer>
  );
};

// --- NEW ICONS ---
const IconAddress = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
);
const IconEmail = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
);
const IconPhone = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2C6.5 2 2 6.33 2 11.73c0 2.08.69 4.02 1.87 5.6L2 22l4.81-1.54c1.54.85 3.33 1.34 5.23 1.34 5.54 0 10.04-4.33 10.04-9.73S17.58 2 12.04 2zm0 17.71c-1.63 0-3.16-.47-4.46-1.27l-.32-.2-2.85.91.93-2.77-.22-.33c-1.02-1.41-1.61-3.09-1.61-4.9 0-4.2 3.51-7.61 7.82-7.61s7.82 3.41 7.82 7.61c0 4.19-3.51 7.56-7.82 7.56z" />
    <path d="M16.31 14.23c-.25-.13-1.48-.73-1.71-.82-.23-.09-.4-.13-.56.13-.17.25-.64.82-.79.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.65-1.24-1.46-1.38-1.71-.15-.25-.02-.39.11-.52.12-.12.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.3-.01-.46-.01-.16 0-.43.06-.65.32-.23.25-.86.83-.86 2.02s.88 2.34 1 2.5c.13.17 1.73 2.7 4.2 3.78.59.25 1.05.39 1.41.5.59.19 1.12.16 1.54.1.47-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.11-.22-.17-.47-.3z" />
  </svg>
);

// --- SOCIAL MEDIA ICONS ---
const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" /></svg>
);
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.499 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
);
const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default Footer;
