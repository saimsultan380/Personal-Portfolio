import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { isIndexableEnvironment, SITE_URL } from "@/lib/site";
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

const indexable = isIndexableEnvironment();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

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
    siteName: "Saim Sultan",
    images: [
      {
        url: "/saim-hero.png",
        alt: "Saim Sultan, web developer in Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/saim-hero.png"],
  },

  robots: indexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
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
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="preconnect" href="https://api.microlink.io" />
        <link rel="dns-prefetch" href="https://api.microlink.io" />
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
