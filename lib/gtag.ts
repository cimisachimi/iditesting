// lib/gtag.ts
export const pageview = (url: string) => {
  if (process.env.NODE_ENV === 'production' && typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
      page_path: url,
    })
  }
}