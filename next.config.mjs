import withPWAInit from "@ducanh2912/next-pwa";

const withPWAConfig = withPWAInit({
  pwa: {
    dest: 'public',
    // other PWA options go here
  },
  env: {
    metadataBase: 'http://localhost:3000', // Set your actual app URL here
  },
  // other Next.js configurations...
});

// Export the configuration object returned by withPWAInit
export default withPWAConfig;
