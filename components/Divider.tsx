import { cn } from "@/lib/utils";

const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("h-[1px] bg-foreground", className)} />;
};

export default Divider;
