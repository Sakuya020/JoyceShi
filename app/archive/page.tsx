import { client } from "@/lib/sanity";
import Img from "@/components/Img";
import { getImageInfo } from "@/lib/utils";
import ArchiveImage from "@/components/ArchiveImage";

const getData = async () => {
  const query = `
    *[_type == 'archive'] {
    title,
      images[]{
        "image": asset._ref
      }
    }[0]`;

  const data = await client.fetch(query);
  return data;
};

const Archive = async () => {
  const { title, images } = await getData();
  return (
    <main className="grid grid-cols-1 sm:grid-cols-3  gap-[5px] sm:gap-[10px] mt-4 sm:mt-[10px]">
      {images.map((item: { image: string }, index: number) => {
        return (
          <ArchiveImage title={title} item={item} key={index} index={index} />
        );
      })}
    </main>
  );
};

export default Archive;
