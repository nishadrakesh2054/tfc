// Global Window interface extensions
// This file ensures consistent type declarations across the entire app

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Swiper?: any;
    WOW?: {
      new (): {
        init: () => void;
      };
    };
  }
}

export {};
