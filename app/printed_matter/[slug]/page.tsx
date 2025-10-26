import Divider from "@/components/Divider";
import Img from "@/components/Img";
import VideoPlayer from "@/components/VideoPlayer";
import { client } from "@/lib/sanity";
import { getImageInfo } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PortableText } from "next-sanity";

const getData = async (slug: string) => {
  const query = `
  *[_type == 'portfolio' && slug.current == '${slug}']{
    title,
      type,
      client,
      agency,
      awards,
      desc,
      videos[]{
        "video": video,
        "thumbnail": thumbnail.asset._ref
      },
      videoList[]{
        "file": file.asset._ref,
        "thumbnail": thumbnail.asset._ref
      },
      images[]{
        "image": asset._ref
      }
  }[0]`;

  const data = await client.fetch(query);
  return data;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const {
    title,
    type,
    client,
    agency,
    awards,
    desc,
    videos,
    videoList,
    images,
  } = await getData(params.slug);

  return (
    <article>
      <header className="grid grid-cols-3 sm:grid-cols-6 gap-x-[5px] sm:gap-x-[10px] sm:h-[114px] py-4 sm:py-2 animate-fade">
        <div className="col-span-1 flex">
          <ArrowRightIcon className="w-3 h-3 mr-2 mt-[2px] rotate-45 flex-shrink-0" />
          <h3 className="col-span-1 pr-1">{title}</h3>
        </div>

        <div className="col-span-2 sm:max-h-24 overflow-y-scroll">
          <div className="flex">
            <ArrowRightIcon className="w-3 h-3 mr-2 mt-[2px] rotate-45 flex-shrink-0" />
            <p>{type}</p>
          </div>
          {client && (
            <div className="flex">
              <ArrowRightIcon className="w-3 h-3 mr-2 mt-[2px] rotate-45 flex-shrink-0" />
              <p>{client}</p>
            </div>
          )}
          {agency && (
            <div className="flex">
              <ArrowRightIcon className="w-3 h-3 mr-2 mt-[2px] rotate-45 flex-shrink-0" />
              <p>{agency}</p>
            </div>
          )}
          {awards && (
            <>
              <Divider className="my-[10px] sm:my-[6px]" />
              {awards.map((award: string, index: number) => (
                <div key={index} className="flex">
                  <ArrowRightIcon className="w-3 h-3 mr-2 mt-[2px] rotate-45 flex-shrink-0" />
                  <p>{award}</p>
                </div>
              ))}
            </>
          )}
        </div>

        {/* project description for pc view */}
        <div className="hidden sm:block col-span-3 col-start-4 col-end-7 prose-p:text-xs max-h-24 overflow-y-scroll">
          <PortableText value={desc} />
        </div>
      </header>

      <Divider className="mb-[15px] sm:mb-[10px]" />

      {/* images */}
      <figure className="grid grid-cols-1 sm:grid-cols-2 gap-[5px] sm:gap-[10px]">
        {videos?.length > 0 &&
          videos.map(
            (item: { video: string; thumbnail: string }, index: number) => (
              <VideoPlayer key={index} item={item} />
            )
          )}
        {videoList?.length > 0 &&
          videoList.map(
            (item: { file: string; thumbnail: string }, index: number) => (
              <VideoPlayer
                key={index}
                item={{ video: item.file, thumbnail: item.thumbnail }}
              />
            )
          )}
        {images.map((item: { image: string }, index: number) => {
          const { imgUrl, ratio } = getImageInfo(item.image);
          return <Img key={index} item={{ ratio, imgUrl, title, index }} />;
        })}
      </figure>

      {/* project description for phone view */}
      <section>
        <div className="sm:hidden my-10 mx-4 prose prose-p:text-xs">
          <PortableText value={desc} />
        </div>
      </section>
    </article>
  );
};

export default page;
