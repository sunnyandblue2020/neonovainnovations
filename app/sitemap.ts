import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://neonovainnovations.com";
  const routes = [
    "",
    "/cybersecurity/",
    "/technology-consulting/",
    "/3d-engineering/",
    "/travel-experiences/",
    "/privacy/",
  ];

  return routes.map((route) => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : route === "/privacy/" ? "yearly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy/" ? 0.3 : 0.8,
  }));
}
