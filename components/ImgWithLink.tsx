"use client";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

const ImgWithLink = ({
  item,
}: {
  item: {
    title: string;
    category: string;
    slug: string;
    cover: string;
  };
}) => {
  return (
    <Link
      href={"/" + item.category + "/" + item.slug}
      className="relative aspect-[2000/1265] overflow-hidden"
    >
      <Image
        src={getImageUrl(item.cover)}
        alt={item.title}
        fill
        className="active:scale-105 sm:hover:scale-105 transition-all duration-500 ease-in-out opacity-0"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </Link>
  );
};

export default ImgWithLink;
