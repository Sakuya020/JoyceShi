"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

interface AccordionProps {
  children: React.ReactNode;
  title: string;
}

const Accordion = ({ children, title }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className="grid grid-cols-3 items-start"
      onClick={() => {
        setAccordionOpen(!accordionOpen);
      }}
    >
      <p
        className={cn(
          "col-span-1 flex items-center border-foreground",
          !accordionOpen && "border-r"
        )}
      >
        <ArrowRightIcon className="w-4 h-4 mr-2 rotate-45" />
        {title}
      </p>
      <div
        className={cn(
          "col-span-2 pl-5 border-foreground",
          accordionOpen && "border-l"
        )}
      >
        {/* expand */}
        <div
          className={cn(
            "transition-all duration-100 ease-linear overflow-hidden prose prose-p:text-sm prose-a:font-normal",
            accordionOpen ? "h-max opacity-100" : "h-0 opacity-0"
          )}
        >
          {children}
        </div>
        {/* collapse */}
        <p
          className={cn(!accordionOpen ? "h-max opacity-100" : "h-0 opacity-0")}
        >
          Click to view
        </p>
      </div>
    </div>
  );
};

export default Accordion;
