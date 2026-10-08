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
      className={`group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-slate-200/90 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-violet-300 hover:shadow-[0_12px_36px_rgba(99,102,241,0.09)] dark:bg-reckai-dark-surface dark:border-neutral-800 dark:hover:border-neutral-700 dark:shadow-none ${
        featured ? "border-violet-300/80 dark:border-violet-800/60 shadow-medium" : ""
      }`}
    >
      {/* Real Project Screenshot Image with Browser Header */}
      {imageUrl && (
        <div className="relative w-full overflow-hidden border-b border-slate-200/80 bg-slate-950 dark:border-neutral-800">
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100/95 dark:bg-neutral-900 border-b border-slate-200/80 dark:border-neutral-800">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
              <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
              <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
            </div>
            <span className="text-xs font-mono text-slate-600 dark:text-neutral-300">
              {product.slug}.reckai.app
            </span>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <img
              src={imageUrl}
              alt={`${product.name} live application interface`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      )}

      <CardHeader>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge variant="violet" className="font-mono text-xs tracking-widest font-bold">
            RECKAI ORIGINAL
          </Badge>
          <span className="text-xs sm:text-sm font-mono text-slate-700 dark:text-neutral-300 uppercase tracking-wider font-semibold">
            {product.category}
          </span>
        </div>

        <CardTitle className="mt-3 text-2xl sm:text-3xl font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {product.name}
        </CardTitle>

        <CardDescription className="text-sm sm:text-base mt-2 line-clamp-3 text-slate-700 dark:text-neutral-300 font-normal">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Capability Tags */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-neutral-400 font-semibold">
            Intelligence
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.aiCapabilities.slice(0, 3).map((cap) => (
              <span
                key={cap}
                className="rounded-md bg-slate-100 border border-slate-200/80 px-2.5 py-1 text-xs sm:text-sm font-semibold text-slate-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="flex flex-wrap gap-1 pt-1">
          {product.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-slate-600 dark:text-neutral-400 mr-2"
            >
              #{tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link href={`/work/originals/${product.slug}`} className="w-full">
          <Button variant="outline" size="sm" arrow="right" className="w-full justify-between">
            <span>Explore Product Architecture</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
