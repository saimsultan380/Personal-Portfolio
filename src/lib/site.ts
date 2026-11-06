export const SITE_URL = "https://saim.mrwebsol.com";
export const CANONICAL_HOST = "saim.mrwebsol.com";
export const WWW_HOST = "www.saim.mrwebsol.com";

/** Absolute canonical URL: https, non-www, trailing slash. Query strings are never included. */
export function canonicalUrl(pathname = "/"): string {
  const raw = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (raw === "/") return `${SITE_URL}/`;
  const withSlash = raw.endsWith("/") ? raw : `${raw}/`;
  return `${SITE_URL}${withSlash}`;
}

/**
 * Preview and local builds must not be indexed.
 * The production Vercel deployment (and a non-Vercel production run) may be indexed.
 * Non-canonical hosts are also marked noindex in proxy.ts.
 */
export function isIndexableEnvironment(): boolean {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv) return vercelEnv === "production";
  return process.env.NODE_ENV === "production";
}

export function homeJsonLd() {
  const url = canonicalUrl("/");
  const image = `${SITE_URL}/saim-hero.png`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Saim Sultan",
        url,
        logo: `${SITE_URL}/icon.svg`,
        image,
        email: "saimsultan380@gmail.com",
        telephone: "+92-300-6031380",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
        },
        sameAs: [
          "https://linkedin.com/in/saim-sultan-wordpress-developer",
          "https://x.com/saimthewebguy",
        ],
      },
      {
        "@type": "WebSite",
        name: "Saim Sultan",
        url,
        publisher: {
          "@type": "Organization",
          name: "Saim Sultan",
          url,
        },
      },
      {
        "@type": "Person",
        name: "Saim Sultan",
        url,
        image,
        jobTitle: "Web Developer & Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Mr Web Sol",
          url: "https://mrwebsol.com/",
        },
        description:
          "Professional Web Developer & Software Engineer specializing in WordPress, Shopify, Next.js, and SEO services across Pakistan.",
        knowsAbout: [
          "Web Development",
          "WordPress",
          "Shopify",
          "Next.js",
          "React",
          "Full-Stack Development",
          "SEO",
          "UI/UX",
          "Ecommerce Development",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "Pakistan",
        },
        areaServed: [
          "Pakistan",
          "Lahore",
          "Karachi",
          "Islamabad",
          "Multan",
          "Rawalpindi",
          "Faisalabad",
        ],
        email: "saimsultan380@gmail.com",
        telephone: "+92-300-6031380",
        sameAs: [
          "https://linkedin.com/in/saim-sultan-wordpress-developer",
          "https://x.com/saimthewebguy",
        ],
      },
    ],
  };
}
