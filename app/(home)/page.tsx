import { client } from "@/lib/sanity";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import Link from "next/link";

const getData = async () => {
  const query = `
  *[_type == 'portfolio' && homepage == true]{
    title,
      category,
      'cover':cover.asset._ref,
      'slug':slug.current
  }`;

  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-[5px] sm:gap-[10px] mt-4 sm:mt-[10px]">
      {data.map(
        (item: {
          title: string;
          category: string;
          slug: string;
          cover: string;
        }) => (
          <Link
            href={"/" + item.category + "/" + item.slug}
            key={item.title}
            className="relative aspect-[2000/1265] overflow-hidden"
          >
            <Image
              src={getImageUrl(item.cover)}
              alt={item.title}
              fill
              className="active:scale-105 sm:hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </Link>
        )
      )}
    </main>
  );
}
