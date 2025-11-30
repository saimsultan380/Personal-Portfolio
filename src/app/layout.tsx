import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingActions } from "@/components/floating-actions";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Saim Sultan | WordPress & Frontend Developer in Islamabad | Next.js Expert",
  description: "Expert WordPress Developer & Frontend Developer in Islamabad, Pakistan. Specializing in React, Next.js, TypeScript, and custom WordPress themes. 5+ years building high-performance web applications.",
  keywords: [
    "WordPress Developer Islamabad",
    "Frontend Developer Pakistan",
    "React Developer",
    "Next.js Developer",
    "Full-Stack Developer",
    "Custom WordPress Themes",
    "TypeScript Developer",
    "Web Developer Islamabad",
    "JavaScript Developer",
    "UI/UX Developer",
    "Responsive Web Design",
    "WordPress Theme Development",
    "React Next.js Developer",
    "Modern Web Applications",
    "Saim Sultan Developer"
  ],
  authors: [{ name: "Saim Sultan" }],
  creator: "Saim Sultan",
  publisher: "Saim Sultan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saimsultan.com",
    title: "Saim Sultan | WordPress & Frontend Developer in Islamabad",
    description: "Expert WordPress Developer & Frontend Developer specializing in React, Next.js, and custom WordPress themes. Based in Islamabad, Pakistan.",
    siteName: "Saim Sultan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saim Sultan - WordPress & Frontend Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saim Sultan | WordPress & Frontend Developer",
    description: "Expert WordPress & Frontend Developer in Islamabad. Specializing in React, Next.js, and custom WordPress themes.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
    "@type": "Person",
    name: "Saim Sultan",
    url: "https://saimsultan.com",
    image: "/profile.jpg",
    jobTitle: "WordPress & Frontend Developer",
    description: "Expert WordPress Developer and Frontend Developer specializing in React, Next.js, TypeScript, and custom WordPress theme development",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "Pakistan"
    },
    email: "saim@mrwebsol.com",
    telephone: "+92-300-6031380",
    sameAs: [
      "https://github.com/saimsultan",
      "https://linkedin.com/in/saimsultan"
    ],
    knowsAbout: [
      "WordPress Development",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Custom WordPress Themes",
      "Web Application Development",
      "UI/UX Design",
      "Responsive Web Design"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Engineering & Technology"
    },
    worksFor: {
      "@type": "Organization",
      name: "Mr Web Sol",
      url: "https://mrwebsol.com"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
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
