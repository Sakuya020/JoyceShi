"use client";

import Image from "next/image";
import { getImageInfo } from "@/lib/utils";

const ArchiveImage = ({
  title,
  item,
  index,
}: {
  title: string;
  item: {
    image: string;
  };
  index: number;
}) => {
  const { imgUrl, ratio } = getImageInfo(item.image);
  return (
    <figure className={`relative w-full`} style={{ aspectRatio: ratio }}>
      <Image
        src={imgUrl}
        alt={title}
        fill
        className={`transition-all duration-300 ease-linear opacity-0`}
        style={{ transitionDelay: `${index * 200}ms` }}
        onLoadingComplete={(image) => {
          image.classList.remove(`opacity-0`);
          setTimeout(() => {
            image.style.transitionDelay = "0ms";
          }, index * 200);
        }}
      />
    </figure>
  );
};

export default ArchiveImage;
