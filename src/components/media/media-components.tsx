"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | "auto";
  priority?: boolean;
  className?: string;
  caption?: string;
}

export function ResponsiveImage({
  src,
  alt,
  aspectRatio = "16/9",
  priority = false,
  className,
  caption,
}: ResponsiveImageProps) {
  const aspectStyles = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
    auto: "aspect-auto",
  };

  return (
    <figure className={cn("overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900", className)}>
      <div className={cn("relative w-full overflow-hidden", aspectStyles[aspectRatio])}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export interface ProductVideoProps {
  src: string;
  poster?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "auto";
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export function ProductVideo({
  src,
  poster,
  aspectRatio = "16/9",
  autoPlay = true,
  loop = true,
  muted = true,
  className,
}: ProductVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const aspectStyles = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    auto: "aspect-auto",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-950 dark:border-neutral-800",
        aspectStyles[aspectRatio],
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay && !prefersReducedMotion}
        loop={loop}
        muted={isMuted}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />

      {/* Subtle control overlay on hover */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="text-xs font-mono text-white hover:text-violet-400 transition-colors"
        >
          {isPlaying ? "PAUSE" : "PLAY"}
        </button>
        <span className="text-neutral-500">•</span>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="text-xs font-mono text-white hover:text-violet-400 transition-colors"
        >
          {isMuted ? "MUTED" : "SOUND ON"}
        </button>
      </div>
    </div>
  );
}

export function MediaGallery({
  images,
  className,
}: {
  images: { src: string; alt: string; caption?: string }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      {images.map((img, idx) => (
        <ResponsiveImage
          key={idx}
          src={img.src}
          alt={img.alt}
          caption={img.caption}
        />
      ))}
    </div>
  );
}
