"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import NavbarPhone from "./NavbarPhone";
import AnimatedText from "./AnimatedText";
import AnimatedDivider from "./AnimatedDivider";
import { motion } from "framer-motion";

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
  {
    name: "joyceshidesign@gmail.com",
    href: "mailto:joyceshidesign@gmail.com",
    alias: "email",
  },
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
      <nav className="fixed top-0 w-[calc(100%-32px)] sm:w-[calc(100%-20px)] pt-4 sm:pt-[9px] sm:mb-0 bg-background z-10">
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
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ArrowRightIcon
                className={cn(
                  "w-3 h-3 mr-2 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                  pathname === "/intro" && "rotate-45"
                )}
              />
              <AnimatedText text="Joyce Shi" />
            </Button>
          </Link>

          {/* social links */}
          <li className="hidden col-span-1 col-start-5 col-end-6 sm:flex flex-col -space-y-2">
            {socials.map(({ name, href, alias }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // transition={{ delay: 0.5, ease: "easeInOut" }}
              >
                <Button className="group underline">
                  <ArrowRightIcon className="w-3 h-3 mr-2 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300" />
                  <span className={cn(alias && "hidden xl:block")}>
                    <AnimatedText text={name} />
                  </span>
                  {alias && (
                    <span className="block xl:hidden">
                      <AnimatedText text={alias} />
                    </span>
                  )}
                </Button>
              </motion.a>
            ))}
          </li>

          {/* Homepage, Printed Matter, Digital Interface for pc view */}
          <li className="hidden sm:flex col-span-1 col-start-6 col-end-7 flex-col -space-y-[11px]">
            {routes.map(({ name, href, value }) => (
              <Link
                key={name}
                href={href}
                onClick={(e) => {
                  if (pathname.includes(value)) {
                    e.preventDefault();
                    router.push(`/${value}`);
                  }
                }}
                className="first:mb-[14px]"
                scroll={false}
              >
                <Button
                  className={cn(
                    "group h-max items-start pt-1",
                    pathname.includes(value) && "text-primary-foreground",
                    pathname === "/" &&
                      value === "homepage" &&
                      "text-primary-foreground"
                  )}
                  key={name}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // transition={{ delay: 0.7, ease: "easeInOut" }}
                >
                  <ArrowRightIcon
                    className={cn(
                      "w-3 h-3 mr-2 mt-[2px] flex-shrink-0 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                      pathname.includes(value) && "rotate-45",
                      pathname === "/" && value === "homepage" && "rotate-45"
                    )}
                  />
                  <div className="text-start text-wrap">
                    <AnimatedText text={name} />
                  </div>
                </Button>
              </Link>
            ))}
          </li>

          {/* Homepage, Printed Matter, Digital Interface for phone view */}
          <NavbarPhone />
        </div>
        <AnimatedDivider />
      </nav>
      <div className="h-[94px] sm:h-[157px]"></div>
    </>
  );
};

export default Navbar;
