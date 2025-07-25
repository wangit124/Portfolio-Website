"use client";

import { DEFAULT_PROFILE_IMAGE_SIZE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CustomImage = ({
  src,
  alt,
  radius,
  width = DEFAULT_PROFILE_IMAGE_SIZE,
  height = DEFAULT_PROFILE_IMAGE_SIZE,
}: {
  src: string;
  alt: string;
  radius?: string;
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <div
      className={cn(
        "relative",
        radius === "rounded-full" ? "rounded-full" : radius,
        "overflow-hidden",
        "flex-shrink-0"
      )}
      style={{ width, height }}
    >
      <Image
        unoptimized={src?.endsWith(".gif")}
        priority
        src={src}
        alt={alt}
        className="object-cover"
        fill
        sizes="100%"
      />
    </div>
  );
};

export default CustomImage;
