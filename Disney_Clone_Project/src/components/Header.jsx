import React from "react";
import { HiHome, HiStar, HiDotsVertical } from "react-icons/hi";
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
    <nav className="flex justify-between items-center p-1">
      <div className="flex items-center text-white gap-8">
        <div className="mr-10">
          <img
            className="w-[80px] md:w-[125px] object-cover text-white"
            src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png"
            alt=""
          />
        </div>

        <div className=" hidden md:flex gap-8 ">
          {menu.map((item) => {
            return <HeaderItems name={item.name} Icon={item.Icon} />;
          })}
        </div>

        <div className="flex md:hidden items-center gap-8">
          {menu.map((item, index) => {
            if (index < 3) {
              return <HeaderItems name={""} Icon={item.Icon} />;
            }
          })}

          <HeaderItems name={""} Icon={HiDotsVertical} />
        </div>
      </div>

      <div>
        <img
          src="https://lh3.googleusercontent.com/ogw/AF2bZyjcvWCMpwMNkIWkJDlq5dGLiLR874vsCvsfXTuo1btiRQ=s32-c-mo"
          alt=""
          className="w-[40px] rounded-full"
        />
      </div>
    </nav>
  );
}
