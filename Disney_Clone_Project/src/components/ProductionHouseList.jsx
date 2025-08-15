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
    <div className="grid xs:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  lg:flex-nowrap 
     sm:min-w-[770] min-w-[990px] gap-2 md:gap-5 p-4 px-11 mb-4">
      {list.map((item, index) => {
        return (
          <div className="relative rounded-lg hover:scale-110
          transition-all duration-300 ease-in-out cursor-pointer
          shadow-xl shadow-gray-800">
            <img src={item.image} alt="" className="border-1 border-gray-400 rounded-lg " />
            <video src={item.video} autoPlay loop muted playsInline
             className=" absolute top-0
            border-1 border-gray-400 rounded-lg opacity-0 hover:opacity-50 "/>
          </div>
        );
      })}
    </div>
  );
}
