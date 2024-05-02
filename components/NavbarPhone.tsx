import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

const NavbarPhone = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <Link key={"homepage"} href={"/"} className="sm:hidden col-span-1">
        <Button
          className={cn("group", pathname === "/" && "text-primary-foreground")}
        >
          <ArrowRightIcon
            className={cn(
              "w-3 h-3 mr-2 group-hover:rotate-45 transition-transform duration-300",
              pathname === "/" && "rotate-45"
            )}
          />
          Homepage
        </Button>
      </Link>

      <li className="sm:hidden col-span-1 flex flex-col -space-y-1">
        <Link
          href={"/printed_matter"}
          onClick={(e) => {
            if (pathname.includes("/printed_matter")) {
              e.preventDefault();
              router.push("/");
            }
          }}
        >
          <Button
            className={cn(
              "group justify-start",
              pathname.includes("/printed_matter") && "text-primary-foreground"
            )}
          >
            <ArrowRightIcon
              className={cn(
                "w-3 h-3 mr-2 group-hover:rotate-45 transition-transform duration-300",
                pathname === "/printed_matter" && "rotate-45"
              )}
            />
            Printed Matter
          </Button>
        </Link>

        <Link
          href={"/digital_interface"}
          onClick={(e) => {
            if (pathname.includes("/digital_interface")) {
              e.preventDefault();
              router.push("/");
            }
          }}
        >
          <Button
            className={cn(
              "group text-wrap flex-wrap justify-start",
              pathname.includes("/digital_interface") &&
                "text-primary-foreground"
            )}
          >
            <ArrowRightIcon
              className={cn(
                "w-3 h-3 mr-2 group-hover:rotate-45 transition-transform duration-300",
                pathname === "/digital_interface" && "rotate-45"
              )}
            />
            <div>Digital</div>
            <div className="ml-[19px]">Interface</div>
          </Button>
        </Link>
      </li>
    </>
  );
};

export default NavbarPhone;
