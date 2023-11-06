"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";
import { GridItemProps } from "./GridItem";
import { ANIMATION_DEFAULT } from "@/constants/animations";

interface MotionImageProps {
  asset: GridItemProps["image"]["asset"];
  isActive: boolean;
}

export const MotionImage: FC<MotionImageProps> = ({ asset, isActive }) => {
  const variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      layoutId={`image_${asset._id}`}
      transition={{ ...ANIMATION_DEFAULT }}
      variants={isActive ? {} : variants}
      exit="initial"
      initial="initial"
      animate="animate"
      className="aspect-[3/4] h-full w-full"
    >
      <div className="max-h=[calc(100vh-32px)]">
        <Image
          className="aspect-[3/4] h-full w-full object-cover"
          width={"600"}
          height={"800"}
          src={asset.url}
          alt={asset._id}
        />
      </div>
    </motion.div>
  );
};
