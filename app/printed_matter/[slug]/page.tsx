import Divider from "@/components/Divider";
import { client } from "@/lib/sanity";
import { getImageInfo } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PortableText } from "next-sanity";
import Image from "next/image";

const getData = async (slug: string) => {
  const query = `
  *[_type == 'portfolio' && slug.current == '${slug}']{
    title,
      type,
      client,
      agency,
      awards,
      desc,
      images[]{
        "image": asset._ref
      }
  }[0]`;

  const data = await client.fetch(query);
  return data;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const { title, type, client, agency, awards, desc, images } = await getData(
    params.slug
  );

  return (
    <article>
      <header className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-2 text-sm">
        <div className="flex">
          <ArrowRightIcon className="w-4 h-4 mr-2 rotate-45" />
          <h3 className="col-span-1">{title}</h3>
        </div>

        <div className="col-span-2">
          <div className="flex">
            <ArrowRightIcon className="w-4 h-4 mr-2 rotate-45" />
            <p>{type}</p>
          </div>
          {client && (
            <div className="flex">
              <ArrowRightIcon className="w-4 h-4 mr-2 rotate-45" />
              <p>{client}</p>
            </div>
          )}
          {agency && (
            <div className="flex">
              <ArrowRightIcon className="w-4 h-4 mr-2 rotate-45" />
              <p>{agency}</p>
            </div>
          )}
          {awards && (
            <>
              <Divider className="my-[10px] sm:my-[6px]" />
              {awards.map((award: string, index: number) => (
                <div key={index} className="flex">
                  <ArrowRightIcon className="w-4 h-4 mr-2 rotate-45" />
                  <p>{award}</p>
                </div>
              ))}
            </>
          )}
        </div>

        {/* project description for pc view */}
        <div className="hidden sm:block sm:col-span-3 prose prose-p:text-sm">
          <PortableText value={desc} />
        </div>
      </header>

      <Divider className="my-[15px] sm:my-[10px]" />

      <figure className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {images.map((item: { image: string }, index: number) => {
          const { imgUrl, ratio } = getImageInfo(item.image);
          return (
            <div
              key={index}
              className={`relative w-full`}
              style={{ aspectRatio: ratio }}
            >
              <Image src={imgUrl} alt={title + "_" + (index + 1)} fill />
            </div>
          );
        })}
      </figure>

      {/* project description for phone view */}
      <section>
        <div className="sm:hidden my-10 prose prose-p:text-sm">
          <PortableText value={desc} />
        </div>
      </section>
    </article>
  );
};

export default page;
