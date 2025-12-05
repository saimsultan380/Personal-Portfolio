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
    default: "Saim Sultan – Web Developer & Software Engineer in Pakistan",
    template: "%s | Saim Sultan",
  },

  description:
    "Professional Web Developer and Software Engineer in Pakistan, specializing in WordPress, Shopify, Next.js, SEO, and custom full-stack solutions. Trusted by businesses across Lahore, Karachi, Islamabad, Multan, Faisalabad, and all over Pakistan.",

  keywords: [
    "Web Developer Pakistan",
    "WordPress Developer Pakistan",
    "Shopify Expert Pakistan",
    "Next.js Developer",
    "Full-Stack Developer Pakistan",
    "Freelance Web Developer",
    "Custom Website Development",
    "SEO Services Pakistan",
    "Ecommerce Developer Pakistan",
    "Saim Sultan Portfolio"
  ],

  authors: [{ name: "Saim Sultan" }],
  creator: "Saim Sultan",
  publisher: "Saim Sultan",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saimsultan.com",
    title: "Saim Sultan – Expert Web Developer & Software Engineer in Pakistan",
    description:
      "Hire a top-rated Web Developer & Software Engineer specializing in WordPress, Shopify, Next.js, and SEO. Serving clients across Pakistan including Lahore, Karachi, Islamabad, and beyond.",
    siteName: "Saim Sultan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saim Sultan – Web Developer Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saim Sultan – Web Developer & Software Engineer",
    description:
      "Full-stack web developer providing WordPress, Shopify, Next.js, SEO, and custom web solutions across Pakistan.",
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

  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saim Sultan",
    url: "https://saimsultan.com",
    image: "https://saimsultan.com/profile.jpg",
    jobTitle: "Web Developer & Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Mr Web Sol",
      url: "https://mrwebsol.com",
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
      "Ecommerce Development"
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
      "Faisalabad"
    ],
    email: "saim@mrwebsol.com",
    telephone: "+92-300-6031380",
    sameAs: [
      "https://github.com/saimsultan380",
      "https://linkedin.com/in/saim-sultan-wordpress-developer",
      "https://x.com/saimthewebguy"
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
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
