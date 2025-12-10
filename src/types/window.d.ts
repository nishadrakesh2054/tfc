// Global Window interface extensions
// This file ensures consistent type declarations across the entire app

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Swiper?: any;
    WOW?: {
      new (config?: {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
      }): {
        init: () => void;
      };
    };
  }
}

export {};
