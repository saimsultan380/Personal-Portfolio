import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { canonicalUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pageFile = path.join(process.cwd(), "src", "app", "page.tsx");
  const lastModified = fs.statSync(pageFile).mtime;

  return [
    {
      url: canonicalUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
