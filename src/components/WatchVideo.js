import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeToggle } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeToggle());
  }, []);

  // console.log(searchParams.get("v"));

  return (
    <div className="flex flex-col w-full">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div className="mt-5 ml-20 w-full">
        <iframe
          className="w-3/5 h-[550px] object-cover"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchVideo;
