import Divider from "@/components/Divider";
import { client } from "@/lib/sanity";
import { getImageUrl } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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
  }`;

  const data = await client.fetch(query);
  return data[0];
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
        <div className="hidden sm:block sm:col-span-3">
          {desc.map(
            (block: { children: { text: string }[] }, index: number) => (
              <p key={index}>{block.children[0].text}</p>
            )
          )}
        </div>
      </header>

      <Divider className="my-[15px] sm:my-[10px]" />

      <figure className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {images.map((item: { image: string }, index: number) => (
          <div key={index} className="relative w-full h-auto">
            <img
              src={getImageUrl(item.image)}
              alt={title + "_" + (index + 1)}
            />
          </div>
        ))}
      </figure>
      <section>
        <div className="sm:hidden my-10">
          {desc.map(
            (block: { children: { text: string }[] }, index: number) => (
              <p key={index}>{block.children[0].text}</p>
            )
          )}
        </div>
      </section>
    </article>
  );
};

export default page;
