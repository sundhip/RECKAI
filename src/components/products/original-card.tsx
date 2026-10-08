import * as React from "react";
import Link from "next/link";
import { Product, OriginalProduct } from "@/types/product";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface OriginalProductCardProps {
  product: Product | OriginalProduct;
  featured?: boolean;
}

export function OriginalProductCard({ product, featured = false }: OriginalProductCardProps) {
  const imageUrl = product.images?.[0];

  return (
    <Card
      className={`group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-floating ${
        featured ? "border-violet-300/80 dark:border-violet-800/60 shadow-medium" : ""
      }`}
    >
      {/* Real Project Screenshot Image */}
      {imageUrl && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-neutral-200/80 bg-neutral-950 dark:border-neutral-800">
          <img
            src={imageUrl}
            alt={`${product.name} live application interface`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-2.5 right-2.5 rounded-md bg-neutral-950/85 backdrop-blur px-2.5 py-1 text-xs font-mono text-white border border-neutral-700/60 shadow-sm">
            Live Platform
          </span>
        </div>
      )}

      <CardHeader>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge variant="violet" className="font-mono text-xs tracking-wider font-bold px-2.5 py-0.5">
            RECKAI ORIGINAL
          </Badge>
          <span className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider font-medium">
            {product.category}
          </span>
        </div>

        <CardTitle className="mt-3 text-2xl sm:text-3xl font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {product.name}
        </CardTitle>

        <CardDescription className="text-sm sm:text-base mt-2 line-clamp-3 leading-relaxed">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Capability Tags */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
            Intelligence
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.aiCapabilities.slice(0, 3).map((cap) => (
              <span
                key={cap}
                className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {product.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mr-2"
            >
              #{tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link href={`/work/originals/${product.slug}`} className="w-full">
          <Button variant="outline" size="md" arrow="right" className="w-full justify-between">
            <span>Explore Product Architecture</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
