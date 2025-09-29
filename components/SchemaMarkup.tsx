import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indo Charcoal Supply",
    "url": "https://www.indocharcoalsupply.com",
    "logo": "https://www.indocharcoalsupply.com/logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-896-8719-9099",
      "contactType": "Sales",
      "areaServed": "Worldwide",
      "availableLanguage": [
        "English",
        "Indonesian",
        "German",
        "Arabic",
        "Dutch",
        "Chinese",
        "French",
        "Japanese"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Magelang Street 71",
      "addressLocality": "Sleman",
      "addressRegion": "Yogyakarta",
      "postalCode": "55286",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61570964318471",
      "https://www.instagram.com/indocharcoalsupply",
      "https://www.linkedin.com/in/adam-billah-144b78342/"
    ],
    "description":
      "Indo Charcoal Supply is a leading manufacturer and exporter of high-quality coconut charcoal briquettes for shisha and BBQ.",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Shisha Charcoal Briquettes",
          "description":
            "High-quality coconut charcoal briquettes for shisha, available in various shapes and sizes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "BBQ Charcoal Briquettes",
          "description":
            "Long-lasting and high-heat coconut charcoal briquettes for BBQ."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
