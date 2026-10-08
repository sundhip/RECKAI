import * as React from "react";
import Link from "next/link";
import { Product, BuildProduct } from "@/types/product";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface BuildProjectCardProps {
  project: Product | BuildProduct;
  featured?: boolean;
}

export function BuildProjectCard({ project, featured = false }: BuildProjectCardProps) {
  const isAnonymized = project.visibility === "ANONYMIZED";
  const status = project.buildStatus || (project.currentStage as string) || "IN DEVELOPMENT";

  return (
    <Card
      className={`group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
        featured ? "border-neutral-400 dark:border-neutral-600 shadow-medium" : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Badge variant="default" className="font-mono text-[10px] tracking-widest font-bold">
              RECKAI BUILD
            </Badge>
            <Badge variant="outline" className="font-mono text-[10px] text-neutral-500">
              {status}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            {project.industry && (
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {project.industry}
              </span>
            )}
            {isAnonymized && (
              <Badge variant="subtle" className="text-[10px]">
                Anonymized Case
              </Badge>
            )}
          </div>
        </div>

        <CardTitle className="mt-3 text-2xl sm:text-3xl font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {isAnonymized ? `Client in ${project.industry || "Enterprise"}` : project.name}
        </CardTitle>

        <CardDescription className="text-sm sm:text-base mt-2 line-clamp-3">
          {project.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Capabilities / AI */}
        {project.aiCapabilities && project.aiCapabilities.length > 0 && (
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Intelligence & Capabilities
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.aiCapabilities.slice(0, 3).map((cap) => (
                <span
                  key={cap}
                  className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  ✦ {cap}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Services Provided */}
        {project.servicesProvided && project.servicesProvided.length > 0 && (
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Services Delivered
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.servicesProvided.slice(0, 3).map((srv) => (
                <span
                  key={srv}
                  className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 pt-1">
          {project.technologies.slice(0, 3).map((tech) => (
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
        <Link href={`/work/builds/${project.slug}`} className="w-full">
          <Button variant="outline" size="sm" arrow="right" className="w-full justify-between">
            <span>View Case Study</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
