"use client";

import { PortableText } from "next-sanity";

const MyPortableText = ({ value }: any) => {
  return (
    <PortableText
      value={value}
      components={{
        marks: {
          link: ({ children, value }) => {
            return (
              <a
                href={value.href}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </a>
            );
          },
        },
      }}
    />
  );
};

export default MyPortableText;
