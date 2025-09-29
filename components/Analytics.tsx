// components/GoogleAnalytics.tsx
'use client' // This is a client component

import Script from 'next/script'

const GoogleAnalytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  // Only render the scripts in production
  if (process.env.NODE_ENV !== 'production') {
    return null
  }
  
  // Or if the GA ID is not set
  if (!gaId) {
    console.warn("Google Analytics ID is not set. Analytics will be disabled.");
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics