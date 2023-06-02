import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeToggle } from "../utils/appSlice";
import WatchVideo from "./WatchVideo";

const WatchVideoContainer = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeToggle());
  }, []);

  return (
    <div>
      <WatchVideo id={searchParams.get("v")} />
    </div>
  );
};

export default WatchVideoContainer;
