import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import WatchVideoContainer from "./WatchVideoContainer";
import WatchVideo from "./WatchVideo";

const BodyLayout = () => {
  return (
    <div className="flex p-2">
      <SideBar />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyLayout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

export default AppRouter;
