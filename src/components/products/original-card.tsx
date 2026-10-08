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
  return (
    <Card
      className={`group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
        featured ? "border-violet-300/80 dark:border-violet-800/60 shadow-medium" : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge variant="violet" className="font-mono text-[10px] tracking-widest font-bold">
            RECKAI ORIGINAL
          </Badge>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        <CardTitle className="mt-3 text-2xl sm:text-3xl font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {product.name}
        </CardTitle>

        <CardDescription className="text-sm sm:text-base mt-2 line-clamp-3">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Capability Tags */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
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
        <div className="flex flex-wrap gap-1 pt-1">
          {product.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mr-2"
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
