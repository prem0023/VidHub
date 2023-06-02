import React from "react";
import ShimmerVideo from "./ShimmerVideo";

const ShimmerUI = () => {
  return new Array(20).fill("").map((elem, id) => {
    return <ShimmerVideo key={id} />;
  });
};

export default ShimmerUI;
