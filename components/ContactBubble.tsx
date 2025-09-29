'use client';

import React, { useState } from 'react';

const ContactBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- Using the updated contact details ---
  const whatsappNumber = "6289687199099";
  const emailAddress = "info@indocharcoalsupply.com";
  const whatsappMessage = "Hello, I'm interested in your charcoal products for consultation or purchase.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-center gap-4">

        {/* Expanded Contact Options */}
        <div
          className={`transition-all duration-300 ease-in-out flex flex-col items-center gap-4 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
          {/* WhatsApp Link */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
            aria-label="Contact via WhatsApp"
          >
            <WhatsAppIcon />
            <span className="absolute right-full mr-4 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              WhatsApp
            </span>
          </a>

          {/* Email Link */}
          <a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-600 text-white shadow-lg hover:bg-gray-700"
            aria-label="Contact via Email"
          >
            <EmailIcon />
            <span className="absolute right-full mr-4 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Email
            </span>
          </a>
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-white shadow-xl transition-transform hover:scale-110"
          aria-expanded={isOpen}
          aria-label="Toggle contact options"
        >
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </button>
      </div>
    </div>
  );
};

// SVG Icons
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004 4.971 4.971z" />
  </svg>
);
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default ContactBubble;
