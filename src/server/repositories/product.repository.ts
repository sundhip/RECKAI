import { Product, ProductType } from "@/types/product";
import { RECKAI_ORIGINALS } from "@/data/products/originals";
import { getPublicBuilds } from "@/data/products/builds";

/**
 * Product Repository
 * Serves products from structured data files with direct database extensibility.
 */
export class ProductRepository {
  /**
   * Retrieves all public products (Originals + Public Builds)
   */
  async getAllPublic(): Promise<Product[]> {
    const publicBuilds = getPublicBuilds();
    return [...RECKAI_ORIGINALS, ...publicBuilds];
  }

  /**
   * Retrieves products by type ('ORIGINAL' or 'BUILD')
   */
  async getByType(type: ProductType): Promise<Product[]> {
    if (type === "ORIGINAL") {
      return RECKAI_ORIGINALS.filter((p) => p.status === "PUBLIC");
    }
    return getPublicBuilds();
  }

  /**
   * Retrieves a single product by slug
   */
  async getBySlug(slug: string): Promise<Product | null> {
    const all = await this.getAllPublic();
    const product = all.find((p) => p.slug === slug);
    return product || null;
  }

  /**
   * Retrieves featured products for homepage spotlight
   */
  async getFeatured(): Promise<Product[]> {
    const all = await this.getAllPublic();
    return all.filter((p) => p.featured);
  }
}

export const productRepository = new ProductRepository();
