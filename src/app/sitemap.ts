import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { productService } from "@/server/services/product.service";
import { RECKAI_SERVICES } from "@/data/services/services-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const products = await productService.getPublicProducts();

  const productUrls: MetadataRoute.Sitemap = products.flatMap((product) => {
    const urls = [
      {
        url: `${baseUrl}/work/${product.slug}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: "weekly" as const,
        priority: product.type === "ORIGINAL" ? 0.9 : 0.8,
      },
    ];
    if (product.type === "ORIGINAL") {
      urls.push({
        url: `${baseUrl}/work/originals/${product.slug}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: "weekly" as const,
        priority: 0.95,
      });
    }
    if (product.type === "BUILD" && product.visibility === "PUBLIC") {
      urls.push({
        url: `${baseUrl}/work/builds/${product.slug}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: "weekly" as const,
        priority: 0.85,
      });
    }
    return urls;
  });

  const serviceUrls: MetadataRoute.Sitemap = RECKAI_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/originals`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/builds`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/start-project`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...productUrls, ...serviceUrls];
}
