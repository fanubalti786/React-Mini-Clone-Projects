import React from "react";
import Button from "../Button";

export default function EmailCapture() {
  return (
    <div className="w-full bg-[#2699fb]">
      <div
        className=" flex flex-wrap md:flex-nowrap justify-between max-w-[1250px] mx-auto
      py-[100px] md:px-8 "
      >
        <div className="p-4 "> 
          <h1 className=" text-1xl md:text-3xl text-white">
            Want to Learn Latest I.T Skills?
          </h1>
          <p className="text-white">Sign up to our newslatter and stay up to date.</p>
        </div>
        <div className="grid pt-4 p-4"> 
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[250px] md:py-2 bg-amber-50 rounded-md pl-2 hover:border-1 border-gray-600 "
            />
            <Button color={"bg-black"} hoverColor={"hover:bg-gray-600"}
        size={"w-[130px]"} text={"Get Start"}/>
          </div>
          <p className=" text-white">
          we care about the protuction of your data Read our
        </p>
        <span className="text-1xl text-purple-950 underline ">Privacey Policy.</span>
        </div>
      </div>
      <hr className="border-t-2 border-gray-400" />
    </div>
  );
}
