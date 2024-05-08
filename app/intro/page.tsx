import Accordion from "@/components/Accordion";
import Divider from "@/components/Divider";
import MyPortableText from "@/components/MyPortableText";
import SocialLink from "@/components/SocialLink";
import { client } from "@/lib/sanity";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const getData = async () => {
  const query = `
  *[_type == 'introduction'] | order(_createdAt asc)`;

  const data = await client.fetch(query);
  return data;
};

const socials = [
  { name: "G Axis Press", href: "https://gaxis.press/" },
  {
    name: "instagram",
    href: "https://www.instagram.com/gloamaxis/?igshid=YmMyMTA2M2Y%3D",
  },
  { name: "email", href: "mailto:joyceshidesign@gmail.com" },
  {
    name: "resume",
    href: "https://drive.google.com/file/d/1PItNqPCMpBB5bFmDLqDpwux05vBWqp4V/view",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joyce-shi-553272167/",
  },
];

const Intro = async () => {
  const data = await getData();
  return (
    <article className="grid grid-cols-1 sm:grid-cols-3 gap-x-[10px] sm:h-screen">
      {data.map(({ title, desc }: { title: string; desc: any }) => (
        <>
          {/* desktop view */}
          <section className="hidden sm:block overflow-y-scroll" key={title}>
            <div className="fixed h-[30px] w-full bg-background">
              <div className="flex items-center h-full">
                <ArrowRightIcon className="w-3 h-3 mr-2 rotate-45 flex-shrink-0" />
                <h1>{title}</h1>
              </div>
              <Divider className="w-[calc(33.33%-12px)]" />
            </div>
            <div className="h-[30px] mb-5"></div>
            <div className="min-h-screen px-[15px] border-l border-foreground prose prose-p:text-xs prose-a:font-normal animate-fade">
              <MyPortableText value={desc} />
            </div>
          </section>

          {/* phone view */}
          <section className="sm:hidden animate-fade">
            <Accordion title={title}>
              <MyPortableText value={desc} />
            </Accordion>
          </section>
        </>
      ))}

      <section className="sm:hidden animate-fade">
        <Accordion title="Contacts">
          {socials.map(({ name, href }) => (
            <SocialLink key={name} name={name} href={href} />
          ))}
        </Accordion>
      </section>
    </article>
  );
};

export default Intro;
