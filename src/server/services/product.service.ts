import { productRepository } from "@/server/repositories/product.repository";
import { Product, OriginalProduct, BuildProduct } from "@/types/product";

export class ProductService {
  async getPublicProducts(): Promise<Product[]> {
    return productRepository.getAllPublic();
  }

  async getOriginals(): Promise<OriginalProduct[]> {
    const list = await productRepository.getByType("ORIGINAL");
    return list as OriginalProduct[];
  }

  async getBuilds(): Promise<BuildProduct[]> {
    const list = await productRepository.getByType("BUILD");
    return list as BuildProduct[];
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    return productRepository.getBySlug(slug);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return productRepository.getFeatured();
  }
}

export const productService = new ProductService();
