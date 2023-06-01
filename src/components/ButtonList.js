import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Mixes",
    "Music",
    "Comdey",
    "React",
    "Marvel",
    "Podcasts",
    "Thrillers",
    "News",
    "Recent",
    "watched",
  ];
  return (
    <div className="flex justify-center">
      {buttons.map((button, index) => {
        return <Button button={button} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
