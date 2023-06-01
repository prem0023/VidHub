import { useEffect, useState } from "react";
import Video from "./Video";
import { YOUTUBE_VIDEO_API } from "../utils/constant";

const VideoContainer = () => {
  const [videData, setVideoData] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideoData(json.items);
  };

  return (
    <div className="flex flex-wrap justify-center my-5 space-x-3 space-y-3">
      {videData.map((video) => {
        return <Video videData={video} key={video.id} />;
      })}
    </div>
  );
};

export default VideoContainer;
