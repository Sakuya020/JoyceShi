import { client } from "@/lib/sanity";
import ImgWithLink from "@/components/ImgWithLink";

const getData = async () => {
  const query = `
  *[_type == 'portfolio' && category == "digital_interface"] | order(date desc) {
    title,
      category,
      'cover':cover.asset._ref,
      'slug':slug.current
  }`;

  const data = await client.fetch(query);
  return data;
};

const DigitalInterface = async () => {
  const data = await getData();
  return (
    <main className="grid grid-cols-1 sm:grid-cols-3  gap-[5px] sm:gap-[10px] mt-4 sm:mt-[10px]">
      {data.map(
        (
          item: {
            title: string;
            category: string;
            slug: string;
            cover: string;
          },
          index: number
        ) => (
          <ImgWithLink item={item} key={item.title} index={index} />
        )
      )}
    </main>
  );
};

export default DigitalInterface;
