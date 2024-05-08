"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Collapse } from "react-collapse";

interface AccordionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const Accordion = ({ children, title, className }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(
    title === "Intro" || title === "Contacts"
  );

  return (
    <div
      className="transition-all duration-1000 grid grid-cols-12 gap-x-[5px] py-[15px] items-start border-b border-foreground"
      onClick={() => {
        setAccordionOpen(!accordionOpen);
      }}
    >
      <p className="col-span-3 flex text-wrap items-start">
        <ArrowRightIcon
          className={cn(
            "w-3 h-3 mr-[6px] mt-[2px] transition-all duration-200 ease-in-out flex-shrink-0",
            accordionOpen && "rotate-45"
          )}
        />
        {title}
      </p>
      <div className="col-span-1 h-full flex justify-end mr-4">
        <hr className="w-[1px] bg-foreground h-full" />
      </div>
      <div className="col-span-8">
        <p
          className={cn(
            "border-foreground",
            !accordionOpen ? "h-min" : "h-0 opacity-0"
          )}
        >
          Click to view
        </p>
        <Collapse isOpened={accordionOpen}>
          <div
            className={cn(
              "prose prose-p:text-xs prose-a:font-normal",
              accordionOpen && className
            )}
          >
            {children}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Accordion;
