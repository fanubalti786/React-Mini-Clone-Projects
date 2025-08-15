import React from "react";

import disney from "../assets/images/disney.png";
import logo from "../assets/images/logo.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyV from "../assets/videos/disney.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import nationalV from "../assets/videos/national-geographic.mp4";
import pixarV from "../assets/videos/pixar.mp4";
import starwarV from "../assets/videos/star-wars.mp4";

export default function ProductionHouseList() {
  const list = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },

    {
      id: 2,
      image: pixar,
      video: pixarV,
    },

    {
      id: 3,
      image: marvel,
      video: marvelV,
    },

    {
      id: 4,
      image: starwar,
      video: starwarV,
    },

    {
      id: 5,
      image: nationalG,
      video: nationalV,
    },
  ];
  return (
    <div className="grid basis-full lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  lg:flex-nowrap relative min-w-[990px] gap-2 md:gap-5 p-2  px-10 ">
      {list.map((item, index) => {
        return (
          <div className="border-1 border-gray-200 rounded-lg hover:scale-110
          transition-all duration-300 ease-in-out cursor-pointer">
            <img src={item.image} alt="" className="" />
            <video src={item.video} autoPlay loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
          </div>
        );
      })}
    </div>
  );
}
