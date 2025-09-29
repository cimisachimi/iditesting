// types/gtag.d.ts

declare global {
  interface Window {
    gtag: (
      event: 'config' | 'event',
      action: string,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

// This export statement is needed to make the file a module
// and prevent it from polluting the global scope accidentally.
export {};