"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Divider from "./Divider";

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
  { name: "joyceshidesign@gmail.com", href: "mailto:joyceshidesign@gmail.com" },
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
      <nav className="fixed pt-3 w-full top-0 bg-background pr-8 sm:pr-0 sm:mb-0 sm:static z-10">
        <div className="w-full h-[110px] sm:h-[167px] flex justify-between">
          <Link
            href="/intro"
            onClick={(e) => {
              if (pathname == "/intro") {
                e.preventDefault();
                router.push("/");
              }
            }}
          >
            <Button
              className={cn(
                "group",
                pathname === "/intro" && "text-primary-foreground"
              )}
            >
              <ArrowRightIcon
                className={cn(
                  "w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300",
                  pathname === "/intro" && "rotate-45"
                )}
              />
              Joyce Shi
            </Button>
          </Link>
          <ul className="flex gap-12">
            <li className="hidden sm:flex flex-col">
              {socials.map(({ name, href }) => (
                <Link key={name} href={href}>
                  <Button className="group underline">
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                    {name}
                  </Button>
                </Link>
              ))}
            </li>
            <li className="flex flex-col">
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
                >
                  <Button
                    className={cn(
                      "group",
                      pathname.includes(value) && "text-primary-foreground",
                      pathname === "/" &&
                        value === "homepage" &&
                        "text-primary-foreground"
                    )}
                  >
                    <ArrowRightIcon
                      className={cn(
                        "w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300",
                        pathname.includes(value) && "rotate-45",
                        pathname === "/" && value === "homepage" && "rotate-45"
                      )}
                    />
                    {name}
                  </Button>
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <Divider className="sm:mb-[10px]" />
      </nav>
      <div className="h-[122px] sm:h-0"></div>
    </>
  );
};

export default Navbar;
