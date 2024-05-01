import Accordion from "@/components/Accordion";
import Divider from "@/components/Divider";
import SocialLink from "@/components/SocialLink";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
    <>
      <article className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 text-sm">
        {data.map(
          ({
            title,
            desc,
          }: {
            title: string;
            desc: { children: { text: string }[] }[];
          }) => (
            <>
              {/* desktop view */}
              <section className="hidden sm:block" key={title}>
                <h1 className="flex items-center">
                  <ArrowRightIcon className="w-4 h-4 mr-2 rotate-45" />
                  {title}
                </h1>
                <Divider className="mt-[10px] mb-5" />
                <div className="min-h-screen px-[15px] border-l border-foreground">
                  {desc.map(
                    (
                      block: { children: { text: string }[] },
                      index: number
                    ) => (
                      <p key={index}>{block.children[0].text}</p>
                    )
                  )}
                </div>
              </section>
              {/* phone view */}
              <section className="sm:hidden">
                <Accordion title={title}>
                  {desc.map(
                    (
                      block: { children: { text: string }[] },
                      index: number
                    ) => (
                      <p key={index}>{block.children[0].text}</p>
                    )
                  )}
                </Accordion>
                <Divider className="my-4" />
              </section>
            </>
          )
        )}
        <section className="sm:hidden">
          <Accordion title="Contacts">
            {socials.map(({ name, href }) => (
              <SocialLink key={name} name={name} href={href} />
            ))}
          </Accordion>

          <Divider className="my-4 col-span-3" />
        </section>
      </article>
    </>
  );
};

export default Intro;
