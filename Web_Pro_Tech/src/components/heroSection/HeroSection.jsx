import React from "react";
import { ReactTyped } from "react-typed";
import Button from "../button";

export default function HeroSection({toggle}) {
  return (
    <div>
    <div className={`flex justify-center items-center bg-[#2699fb] w-full ${toggle? "h-screen": "h-[calc(100vh-56px)]"}  md:h-[calc(100vh-68px)] `}>
      <div
        className="grid grid-col md:gap-2 
      font-bold  w-[800px] text-center mb-[65px]"
      >
        <div className="text-1xl md:text-3xl ">
          Learn with us
        </div>
        <h1 className="text-white text-3xl md:text-[55px]">Grow with us!</h1>
        <div className="text-2xl md:text-[40px] text-white">
          Learn
          <ReactTyped
            className="pl-4"
            strings={[
              "Web Development",
              "Blockchain Development",
              "AI Development",
            ]}
            typeSpeed={40}
            backSpeed={20}
            // attr="placeholder"
            loop
          ></ReactTyped>
        </div>
        <div className="mt-2">
        <Button color={"bg-black"} hoverColor={"hover:bg-gray-600"}
        size={"w-[130px]"} text={"Get Start"}/>
        </div>
      </div>
    </div>
    <hr className="border-t-2 border-gray-400" />
    </div>
    
  );
}
