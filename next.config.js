const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: true,
      // basePath: '/',
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      async rewrites() {
        return [
          {
            source: '/ngvodapi/:path*',
            destination: 'https://localhost:8448/:path*', // Proxy to Backend
            basePath: false,
          },
        ]
      },
    }
  }

  return {
    /* config options for all phases except development here */
    reactStrictMode: true,
    // basePath: '/',
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    // async rewrites() {
    //   return [
    //     {
    //       source: '/about',
    //       // destination: 'https://hawk-svc-moneta.dal1a.cirrus.ibm.com/userProfile/loadUserProfileList',
    //       destination: 'https://localhost:8448/:path*', // Proxy to Backend
    //       basePath: false,
    //     },
    //   ]
    // },
  }
}
