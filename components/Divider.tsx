import { cn } from "@/lib/utils";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-[1px] bg-foreground animate-fade", className)} />
  );
};

export default Divider;
