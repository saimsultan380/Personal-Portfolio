import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page does not exist on Saim Sultan's portfolio. Go back home or jump to about, services, projects, or contact.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 pb-24 pt-36 text-center">
      <p className="text-sm font-medium tracking-wide text-primary">404</p>
      <h1 className="mt-3 font-heading text-4xl font-bold md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        That URL is not on this site. Head home, or jump to a section.
      </p>
      <Button asChild className="mt-8 h-12 rounded-full px-8">
        <Link href="/">Home</Link>
      </Button>
      <nav
        aria-label="Popular sections"
        className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
