import { Outlet as Pages } from "react-router";
import {
  HomeIcon,
  GlobeIcon,
  StarIcon,
  BellIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import type { LeftSideMenuItem } from "../shared/interfaces/leftSideMenu.interface";

export const RootLayout = () => {
  const [menuItem, setMenuItem] = useState<LeftSideMenuItem>("home");
  const [isC, setIsC] = useState<boolean>(true);

  const userPhoto = { name: "Maria Garcia", photo: "/src/assets/user.jpg" };
  return (
    <div className="flex gap-2 bg-background text-text-primary w-full h-screen font-sans py-5 px-5">
      <section className="flex flex-col justify-between items-center py-10 px-5 border border-border-subtle rounded-3xl w-1/6 bg-background-secondary">
        <div className="w-full">
          <h2 className=" flex items-center justify-start gap-3 text-h2 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
              alt="logo"
              className="w-8 h-8"
            />
            Weather
          </h2>
          <ul className="flex flex-col gap-3 mt-10 w-full">
            <li
              className={`flex w-full justify-start items-center gap-5 ${menuItem === "home" ? "bg-base-700" : "bg-none"} py-2 px-2 rounded-md cursor-pointer`}
              onClick={() => {
                setMenuItem("home");
              }}
            >
              <HomeIcon width={20} height={20} color="white" />
              Home
            </li>

            <li
              className={`flex w-full justify-start items-center gap-5 ${menuItem === "map" ? "bg-base-700" : "bg-none"} py-2 px-2 rounded-md cursor-pointer`}
              onClick={() => {
                setMenuItem("map");
              }}
            >
              <GlobeIcon width={20} height={20} color="white" />
              World Map
            </li>
            <li
              className={`flex w-full justify-start items-center gap-5 ${menuItem === "favorites" ? "bg-base-700" : "bg-none"} py-2 px-2 rounded-md cursor-pointer`}
              onClick={() => {
                setMenuItem("favorites");
              }}
            >
              <StarIcon width={20} height={20} color="white" />
              Favorites
            </li>
            <li
              className={`flex w-full justify-start items-center gap-5 ${menuItem === "alerts" ? "bg-base-700" : "bg-none"} py-2 px-2 rounded-md cursor-pointer`}
              onClick={() => {
                setMenuItem("alerts");
              }}
            >
              <BellIcon width={20} height={20} color="white" />
              Alerts
            </li>
            <li
              className={`flex w-full justify-start items-center gap-5 ${menuItem === "settings" ? "bg-base-700" : "bg-none"} py-2 px-2 rounded-md cursor-pointer`}
              onClick={() => {
                setMenuItem("settings");
              }}
            >
              <GearIcon width={20} height={20} color="white" />
              Settings
            </li>
          </ul>
        </div>
        <div className="flex">
          <button
            className={`border border-border-subtle px-8 py-1 rounded-l-md cursor-pointer ${isC ? "bg-base-700" : "bg-none"}`}
            onClick={() => {
              setIsC(true);
            }}
          >
            ºC
          </button>
          <button
            className={`border border-border-subtle px-8 py-1 rounded-r-md cursor-pointer ${!isC ? "bg-base-700" : "bg-none"}`}
            onClick={() => {
              setIsC(false);
            }}
          >
            ºF
          </button>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <img
            src={userPhoto.photo}
            alt={userPhoto.name}
            className="w-15 h-15 bg-cover rounded-full object-cover "
          />
          <div>
            <p>{userPhoto.name}</p>
            <p className="text-amber-400 text-sm">Premium</p>
          </div>
        </div>
      </section>
      <section>
        <Pages />
      </section>
    </div>
  );
};
