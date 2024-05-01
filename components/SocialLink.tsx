"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

const SocialLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link
      key={name}
      href={href}
      className="block"
      onClick={(e) => e.stopPropagation()}
    >
      <Button className="group underline h-8">
        <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300" />
        {name}
      </Button>
    </Link>
  );
};

export default SocialLink;
