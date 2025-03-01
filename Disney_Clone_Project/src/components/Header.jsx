import React from "react";
import { HiHome, HiStar } from "react-icons/hi";
import { HiPlus, HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItems from "./HeaderItems";

export default function Header() {
  const menu = [
    {
      name: "HOME",
      Icon: HiHome,
    },

    {
      name: "SEARCH",
      Icon: HiMagnifyingGlass,
    },

    {
      name: "WATCH LIST",
      Icon: HiPlus,
    },

    {
      name: "ORIGINALS",
      Icon: HiStar,
    },

    {
      name: "MOVIE",
      Icon: HiPlayCircle,
    },

    {
      name: "SERIES",
      Icon: HiTv,
    },
  ];
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center text-white gap-8">
        <img
          className="w-[80px] md:w-[125px] object-cover"
          src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png"
          alt=""
        />
        {menu.map((item) => {
          return <HeaderItems name={item.name} Icon={item.Icon} />;
        })}
      </div>

      <div>
        <img
          src="https://lh3.googleusercontent.com/ogw/AF2bZyjcvWCMpwMNkIWkJDlq5dGLiLR874vsCvsfXTuo1btiRQ=s32-c-mo"
          alt=""
        />
      </div>
    </nav>
  );
}
