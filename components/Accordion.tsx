"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

interface AccordionProps {
  children: React.ReactNode;
  title: string;
}

const Accordion = ({ children, title, ...props }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className="grid grid-cols-3 items-start"
      onClick={() => {
        setAccordionOpen(!accordionOpen);
      }}
    >
      <h1 className="col-span-1 flex items-center">
        <ArrowRightIcon className="w-4 h-4 mr-2 rotate-45" />
        {title}
      </h1>
      <div className="col-span-2 pl-5 border-l border-foreground">
        <div
          className={cn(
            "transition-all duration-200 ease-linear overflow-hidden",
            accordionOpen ? "h-max opacity-100" : "h-0 opacity-0"
          )}
        >
          {children}
        </div>
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
