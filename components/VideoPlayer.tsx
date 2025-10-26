"use client";

import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { getImageInfo, getVideoUrl } from "@/lib/utils";

const VideoPlayer = ({
  item,
}: {
  item: { video: string; thumbnail: string };
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  const { video, thumbnail } = item;
  const { imgUrl } = getImageInfo(thumbnail);
  const videoUrl = getVideoUrl(video);
  return (
    <div className="flex justify-center items-center aspect-video bg-foreground">
      <video controls poster={imgUrl}>
        <source src={videoUrl} />
      </video>
    </div>
  );
};

export default VideoPlayer;
