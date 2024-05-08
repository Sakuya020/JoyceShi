"use client";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { useEffect, useState } from "react";

const ImgWithLink = ({
  item,
  index,
}: {
  item: {
    title: string;
    category: string;
    slug: string;
    cover: string;
  };
  index: number;
}) => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setTimeout(() => {
        setFirstLoad(false);
      }, 900);
    }
  }, [firstLoad]);

  return (
    <Link
      href={"/" + item.category + "/" + item.slug}
      className="relative aspect-[2000/1265] overflow-hidden"
    >
      <Image
        src={getImageUrl(item.cover)}
        alt={item.title}
        fill
        className={`active:scale-105 sm:hover:scale-105 transition-all duration-300 ease-linear opacity-0`}
        style={{ transitionDelay: `${900 * +firstLoad + index * 200}ms` }}
        onLoadingComplete={(image) => {
          image.classList.remove(`opacity-0`);
          setTimeout(() => {
            image.style.transitionDelay = "0ms";
          }, 850 + index * 200);
        }}
      />
    </Link>
  );
};

export default ImgWithLink;
