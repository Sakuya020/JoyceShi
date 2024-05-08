import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(url: string) {
  const extension = url.substring(url.lastIndexOf("-") + 1);
  const regex = new RegExp("image-(.*?)-" + extension);
  const fileName = url.match(regex);
  // development
  // return (
  //   `https://cdn.sanity.io/images/u4y5om9m/production/` +
  //   fileName![1] +
  //   "." +
  //   extension
  // );
  // production
  return (
    `https://cdn.sanity.io/images/ypflkenz/production/` +
    fileName![1] +
    "." +
    extension
  );
}

export function getImageInfo(url: string) {
  const extension = url.substring(url.lastIndexOf("-") + 1);
  const fileNameRegex = new RegExp("image-(.*?)-" + extension);
  const resolutionRegex = new RegExp("-(\\d+x\\d+)-");

  const fileName = url.match(fileNameRegex);
  // development
  // const imgUrl =
  //   `https://cdn.sanity.io/images/u4y5om9m/production/` +
  //   fileName![1] +
  //   "." +
  //   extension;
  // production
  const imgUrl =
    `https://cdn.sanity.io/images/ypflkenz/production/` +
    fileName![1] +
    "." +
    extension;

  const resolution = url.match(resolutionRegex);

  const ratio =
    parseInt(resolution![1].split("x")[0]) /
    parseInt(resolution![1].split("x")[1]);

  return { imgUrl, ratio };
}
