"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const SocialLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs block mb-1"
      onClick={(e) => e.stopPropagation()}
    >
      <Button className="group underline">
        <ArrowRightIcon className="w-3 h-3 mr-2 group-active:rotate-45 transition-transform duration-300" />
        {name}
      </Button>
    </a>
  );
};

export default SocialLink;
