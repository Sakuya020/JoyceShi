"use client";

import Image from "next/image";

const Img = ({
  item,
}: {
  item: { ratio: number; imgUrl: string; title: string; index: number };
}) => {
  const { ratio, imgUrl, title, index } = item;
  return (
    <div className={`relative w-full`} style={{ aspectRatio: ratio }}>
      <Image
        src={imgUrl}
        alt={title + "_" + (index + 1)}
        fill
        className=" transition-opacity opacity-0 duration-200 ease-in-out"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </div>
  );
};

export default Img;
