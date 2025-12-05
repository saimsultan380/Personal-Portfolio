import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingActions } from "@/components/floating-actions";
import { Cursor } from "@/components/cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LoadingScreen } from "@/components/loading-screen";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://saimsultan.com"
  ),
  title: {
    default: "Saim Sultan | Web Developer in Lahore, Karachi, Islamabad & Multan",
    template: "%s | Saim Sultan"
  },
  description:
    "Top-rated Web Developer in Pakistan serving Layyah, Multan, Lahore, Islamabad, Rawalpindi, Faisalabad & Karachi. Expert in WordPress, Shopify, Next.js, and Social Media Marketing.",
  keywords: [
    "Web Developer Layyah",
    "WordPress Developer Multan",
    "Shopify Expert Lahore",
    "Web Development Islamabad",
    "Frontend Developer Rawalpindi",
    "Full Stack Developer Faisalabad",
    "Social Media Marketing Karachi",
    "Next.js Developer Pakistan",
    "Custom Website Development",
    "Ecommerce Solutions Pakistan",
    "Saim Sultan Portfolio",
    "Freelance Web Developer Pakistan"
  ],
  authors: [{ name: "Saim Sultan" }],
  creator: "Saim Sultan",
  publisher: "Saim Sultan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saimsultan.com",
    title: "Saim Sultan | Expert Web Developer in Pakistan",
    description:
      "Professional Web Development & Digital Marketing services in Layyah, Multan, Lahore, Islamabad, and across Pakistan. Specializing in WordPress, Shopify, and Custom Code.",
    siteName: "Saim Sultan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saim Sultan - Web Developer Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saim Sultan | Web Developer & Digital Marketer",
    description:
      "Expert Web Developer serving all major cities in Pakistan. WordPress, Shopify, and Custom Solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Saim Sultan",
    url: "https://saimsultan.com",
    image: "https://saimsultan.com/profile.jpg",
    priceRange: "$$",
    description:
      "Expert Web Developer and Digital Marketer providing top-tier services in WordPress, Shopify, Next.js, and Social Media Marketing across Pakistan.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "Pakistan",
    },
    areaServed: [
      { "@type": "City", name: "Layyah" },
      { "@type": "City", name: "Multan" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Rawalpindi" },
      { "@type": "City", name: "Faisalabad" },
      { "@type": "City", name: "Karachi" }
    ],
    email: "saim@mrwebsol.com",
    telephone: "+92-300-6031380",
    sameAs: [
      "https://github.com/saimsultan380",
      "https://linkedin.com/in/saim-sultan-wordpress-developer",
      "https://x.com/saimthewebguy"
    ],
    knowsAbout: [
      "WordPress Development",
      "Shopify Development",
      "Web Development",
      "Social Media Marketing",
      "SEO",
      "Next.js",
      "React",
      "Full Stack Development"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Mr Web Sol",
      url: "https://mrwebsol.com",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.microlink.io" />
        <link rel="dns-prefetch" href="https://api.microlink.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <SmoothScroll />
          <ScrollProgress />
          <Navbar />
          <Cursor /> {/* Replaced CustomCursor with Cursor */}
          {children}
          <Footer />
          <FloatingActions />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
