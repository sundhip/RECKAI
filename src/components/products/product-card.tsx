import * as React from "react";
import { Product, OriginalProduct, BuildProduct } from "@/types/product";
import { OriginalProductCard } from "@/components/products/original-card";
import { BuildProjectCard } from "@/components/products/build-card";

export interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  if (product.type === "ORIGINAL") {
    return <OriginalProductCard product={product as OriginalProduct} featured={featured} />;
  }

  return <BuildProjectCard project={product as BuildProduct} featured={featured} />;
}
