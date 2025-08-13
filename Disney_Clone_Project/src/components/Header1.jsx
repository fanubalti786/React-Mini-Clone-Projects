import React, { useState } from "react";
import { HiHome, HiStar, HiDotsVertical } from "react-icons/hi";
import { HiPlus, HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import logo from "../assets/react.svg";
import HeaderItems from "./HeaderItems";

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
export default function Header1() {
    const [togle,setTogle] = useState(false);
  return (
    <div className="flex justify-between py-5 px-4 gap-20 min-w-[990px]">
      <div className="flex items-center gap-7">
      <div className="flex items-center gap-20">
        <div>
          <img
            src={
              "https://disney-clone-app-tubeguruji.vercel.app/assets/logo-4f189121.png"
            }
            alt=""
            className="w-[115px] min-w-[60px] object-cover"
          />
        </div>

        <div className="hidden md:flex justify-between w-[700px] pb-3 ">
          {menu?.map((item) => {
            return <HeaderItems name={item.name} Icon={item.Icon} />;
          })}
        </div>
        <div className="flex md:hidden gap-7 pb-3">
          {menu?.map((item,index) => index < 3 && (
            <HeaderItems name={""} Icon={item.Icon} />
          ))}
        </div>

        
      </div>

      <div className="md:hidden pb-3" onClick={() => setTogle(!togle)}>
          <HeaderItems Icon={HiDotsVertical}/>
          {togle? <div className="absolute mt-3 bg-[#121212] border-gray-700 border-[1px] p-4
          rounded-[2px] ">
          {menu?.map((item,index) => index > 2 && (
            <HeaderItems name={item.name} Icon={item.Icon} />
          ))}
          </div> : "" }
          
        </div>

      </div>

      <img src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"} alt="" 
      className="w-[50px] rounded-[full] object-contain"/>


    </div>
  );
}
