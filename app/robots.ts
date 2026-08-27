import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Placeholder review content should not be indexed.
      disallow: ["/reviews"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
