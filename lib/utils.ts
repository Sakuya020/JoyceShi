import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(url: string) {
  const extension = url.substring(url.lastIndexOf("-") + 1);
  const regex = new RegExp("image-(.*?)-" + extension);
  const fileName = url.match(regex);
  return (
    `https://cdn.sanity.io/images/` +
    process.env.SANITY_PROJECT_ID +
    "/" +
    process.env.SANITY_DATASET +
    "/" +
    fileName![1] +
    "." +
    extension
  );
}
