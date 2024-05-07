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
          key={"Homepage"}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeInOut" }}
        >
          <ArrowRightIcon
            className={cn(
              "w-3 h-3 mr-2 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
              pathname === "/" && "rotate-45"
            )}
          />
          Homepage
        </Button>
      </Link>

      <li className="sm:hidden col-span-1 flex flex-col -space-y-3">
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
              "group h-max items-start pt-1",
              pathname.includes("/printed_matter") && "text-primary-foreground"
            )}
            key={"Printed Matter"}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeInOut" }}
          >
            <ArrowRightIcon
              className={cn(
                "w-3 h-3 mr-2 mt-[2px] flex-shrink-0 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                pathname === "/printed_matter" && "rotate-45"
              )}
            />
            <div className="text-start text-wrap">Printed Matter</div>
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
              "group h-max items-start",
              pathname.includes("/digital_interface") &&
                "text-primary-foreground"
            )}
            key={"Digital Interface"}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeInOut" }}
          >
            <ArrowRightIcon
              className={cn(
                "w-3 h-3 mr-2 mt-[2px] flex-shrink-0 group-active:rotate-45 sm:group-hover:rotate-45 transition-transform duration-300",
                pathname === "/digital_interface" && "rotate-45"
              )}
            />
            <div className="text-start text-wrap">Digital Interface</div>
          </Button>
        </Link>
      </li>
    </>
  );
};

export default NavbarPhone;
