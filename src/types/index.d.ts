export {};

declare global {
  interface Window {
    solana: any; // 👈️ turn off type checking
    xnft: any;
    backpack: any;
  }
}


