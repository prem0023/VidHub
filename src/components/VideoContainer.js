import { useEffect, useState } from "react";
import Video from "./Video";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideoData(json.items);
  };

  return videoData.length == 0 ? (
    <div className="flex flex-wrap justify-center my-5">
      <ShimmerUI />
    </div>
  ) : (
    <div className="flex flex-wrap justify-center my-5">
      {videoData.map((video) => {
        return <Video videData={video} key={video.id} />;
      })}
    </div>
  );
};

export default VideoContainer;
