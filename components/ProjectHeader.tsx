"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PortableText } from "next-sanity";
import Divider from "./Divider";
import { motion } from "framer-motion";

const ProjectHeader = ({
  props,
}: {
  props: {
    title: string;
    type: string;
    client: string;
    agency: string;
    awards: string[];
    desc: any;
  };
}) => {
  const { title, type, client, agency, awards, desc } = props;
  return (
    <motion.header
      className="grid grid-cols-3 sm:grid-cols-6 gap-x-[5px] sm:gap-x-[10px] sm:h-[114px] py-4 sm:py-2"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="col-span-1 flex">
        <ArrowRightIcon className="w-3 h-3 mr-2 mt-[2px] rotate-45 flex-shrink-0" />
        <h3 className="col-span-1 pr-1">{title}</h3>
      </div>

      <div className="col-span-2">
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
      <div className="hidden sm:block col-span-3 col-start-4 col-end-7 prose prose-p:text-xs max-h-28 overflow-y-scroll">
        <PortableText value={desc} />
      </div>
    </motion.header>
  );
};

export default ProjectHeader;
