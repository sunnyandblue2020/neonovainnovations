import type { MetadataRoute } from "next";

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
    changeFrequency: route === "" ? "monthly" : "quarterly",
    priority: route === "" ? 1 : route === "/privacy/" ? 0.3 : 0.8,
  }));
}
