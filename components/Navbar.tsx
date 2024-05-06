"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Divider from "./Divider";
import NavbarPhone from "./NavbarPhone";

const routes = [
  { name: "Homepage", href: "/", value: "homepage" },
  { name: "Printed Matter", href: "/printed_matter", value: "printed_matter" },
  {
    name: "Digital Interface",
    href: "/digital_interface",
    value: "digital_interface",
  },
];

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

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <nav className="fixed top-0 w-[calc(100%-32px)] sm:w-[calc(100%-20px)] pt-4 sm:pt-[10px] sm:mb-0 bg-background z-10">
        <div className="w-full h-[94px] sm:h-[157px] grid grid-cols-3 sm:grid-cols-6 gap-x-[5px] sm:gap-x-[10px]">
          {/* Joyce Shi */}
          <Link
            href="/intro"
            onClick={(e) => {
              if (pathname == "/intro") {
                e.preventDefault();
                router.push("/");
              }
            }}
            className="col-span-1"
          >
            <Button
              className={cn(
                "group",
                pathname === "/intro" && "text-primary-foreground"
              )}
            >
              <ArrowRightIcon
                className={cn(
                  "w-3 h-3 mr-2 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                  pathname === "/intro" && "rotate-45"
                )}
              />
              Joyce Shi
            </Button>
          </Link>

          {/* social links */}
          <li className="hidden col-span-1 col-start-5 col-end-6 sm:flex flex-col -space-y-2">
            {socials.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group underline">
                  <ArrowRightIcon className="w-3 h-3 mr-2 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300" />
                  {name}
                </Button>
              </a>
            ))}
          </li>

          {/* Homepage, Printed Matter, Digital Interface for pc view */}
          <li className="hidden sm:flex col-span-1 col-start-6 col-end-7 flex-col -space-y-[10px]">
            {routes.map(({ name, href, value }) => (
              <Link
                key={name}
                href={href}
                onClick={(e) => {
                  if (pathname.includes(value)) {
                    e.preventDefault();
                    router.push("/");
                  }
                }}
                className="first:mb-[14px]"
              >
                <Button
                  className={cn(
                    "group h-max items-start pt-1",
                    pathname.includes(value) && "text-primary-foreground",
                    pathname === "/" &&
                      value === "homepage" &&
                      "text-primary-foreground"
                  )}
                >
                  <ArrowRightIcon
                    className={cn(
                      "w-3 h-3 mr-2 mt-[2px] flex-shrink-0 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                      pathname.includes(value) && "rotate-45",
                      pathname === "/" && value === "homepage" && "rotate-45"
                    )}
                  />
                  <div className="text-start text-wrap">{name}</div>
                </Button>
              </Link>
            ))}
          </li>

          {/* Homepage, Printed Matter, Digital Interface for phone view */}
          <NavbarPhone />
        </div>
        <Divider />
      </nav>
      <div className="h-[94px] sm:h-[157px]"></div>
    </>
  );
};

export default Navbar;
