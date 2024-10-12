import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

const NavbarPhone = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="sm:hidden col-span-1 flex flex-col -space-y-1">
        <Link key={"homepage"} href={"/"} scroll={false}>
          <Button
            className={cn(
              "group",
              pathname === "/" && "text-primary-foreground"
            )}
            key={"Homepage"}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ delay: 0.5, ease: "easeInOut" }}
          >
            <ArrowRightIcon
              className={cn(
                "w-3 h-3 mr-2 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                pathname === "/" && "rotate-45"
              )}
            />
            <AnimatedText text={"Homepage"} />
          </Button>
        </Link>
        <Link
          href={"/archive"}
          onClick={(e) => {
            if (pathname === "/archive") {
              e.preventDefault();
              router.push("/");
            }
          }}
          scroll={false}
        >
          <Button
            className={cn(
              "group h-max items-start pt-1",
              pathname.includes("/archive") && "text-primary-foreground"
            )}
            key={"Archive"}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ delay: 0.7, ease: "easeInOut" }}
          >
            <ArrowRightIcon
              className={cn(
                "w-3 h-3 mr-2 mt-[2px] flex-shrink-0 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                pathname.includes("/archive") && "rotate-45"
              )}
            />
            <div className="text-start text-wrap">
              <AnimatedText text={"Archive"} />
            </div>
          </Button>
        </Link>
      </div>

      <li className="sm:hidden col-span-1 flex flex-col -space-y-3">
        <Link
          href={"/printed_matter"}
          onClick={(e) => {
            if (pathname === "/printed_matter") {
              e.preventDefault();
              router.push("/");
            }
          }}
          scroll={false}
        >
          <Button
            className={cn(
              "group h-max items-start pt-1",
              pathname.includes("/printed_matter") && "text-primary-foreground"
            )}
            key={"Printed Matter"}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ delay: 0.7, ease: "easeInOut" }}
          >
            <ArrowRightIcon
              className={cn(
                "w-3 h-3 mr-2 mt-[2px] flex-shrink-0 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                pathname.includes("/printed_matter") && "rotate-45"
              )}
            />
            <div className="text-start text-wrap">
              <AnimatedText text={"Printed Matter"} />
            </div>
          </Button>
        </Link>

        <Link
          href={"/digital_interface"}
          onClick={(e) => {
            if (pathname === "/digital_interface") {
              e.preventDefault();
              router.push("/");
            }
          }}
          scroll={false}
        >
          <Button
            className={cn(
              "group h-max items-start",
              pathname.includes("/digital_interface") &&
                "text-primary-foreground"
            )}
            key={"Digital Interface"}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ delay: 0.7, ease: "easeInOut" }}
          >
            <ArrowRightIcon
              className={cn(
                "w-3 h-3 mr-2 mt-[2px] flex-shrink-0 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                pathname.includes("/digital_interface") && "rotate-45"
              )}
            />
            <div className="text-start text-wrap">
              <AnimatedText text={"Digital Interface"} />
            </div>
          </Button>
        </Link>
      </li>
    </>
  );
};

export default NavbarPhone;
