import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The six single service pages from the lead automation positioning now map
    // onto the three core services. Permanent so search engines move the value
    // across rather than treating these as missing pages.
    return [
      { source: "/service-ilr", destination: "/services/automation", permanent: true },
      { source: "/service-alq", destination: "/services/automation", permanent: true },
      { source: "/service-dlr", destination: "/services/automation", permanent: true },
      { source: "/service-fullpipe", destination: "/services/automation", permanent: true },
      { source: "/service-webdev", destination: "/services/websites", permanent: true },
      { source: "/service-mvp", destination: "/services/software", permanent: true },
    ];
  },
};

export default nextConfig;
