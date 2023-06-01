import React from "react";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";

const SideBar = () => {
  const items = [
    "Home",
    "Shorts",
    "Subscriptions",
    "Library",
    "History",
    "Your videos",
    "Watch later",
  ];
  const channel = [
    "The Lallantop",
    "Akshay Saini",
    "Thapa Technical",
    "CodeWithHarry",
    "Marvel Entertainment",
  ];

  const store = useSelector((store) => store.app.toggleFlag);

  if (!store) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="mt-2">
        {items.map((item, index) => {
          return <SidebarItem item={item} key={index} />;
        })}
      </div>

      <div className="mt-2">
        <h1 className="font-bold text-xl pl-10 items-center py-3 mx-2 w-64">
          Subscriptions
        </h1>
        <div className="mt-1">
          {channel.map((item, index) => {
            return <SidebarItem item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
