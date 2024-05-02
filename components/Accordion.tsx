"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface AccordionProps {
  children: React.ReactNode;
  title: string;
}

const Accordion = ({ children, title }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(
    title === "Intro" || title === "Contacts"
  );

  return (
    <div
      className="grid grid-cols-10 items-start"
      onClick={() => {
        setAccordionOpen(!accordionOpen);
      }}
    >
      <p className="col-span-2 flex border-foreground text-wrap items-start">
        <ArrowRightIcon
          className={cn(
            "w-3 h-3 mr-2 mt-[2px] transition-all duration-200 ease-in-out flex-shrink-0",
            accordionOpen && "rotate-45"
          )}
        />
        {title}
      </p>
      <div className="col-span-1 h-full flex justify-end">
        <hr className="w-[1px] bg-foreground h-full" />
      </div>
      <div className="col-span-7 border-foreground">
        {/* expand */}
        <div
          className={cn(
            "transition-all duration-100 ease-linear overflow-hidden prose prose-p:text-xs prose-a:font-normal pl-5",
            accordionOpen ? "h-max opacity-100" : "h-0 opacity-0"
          )}
        >
          {children}
        </div>
        {/* collapse */}
        <p
          className={cn(
            "border-foreground pl-5",
            !accordionOpen ? "h-max opacity-100" : "h-0 opacity-0"
          )}
        >
          Click to view
        </p>
      </div>
    </div>
  );
};

export default Accordion;
