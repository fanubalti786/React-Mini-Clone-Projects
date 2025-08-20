import React from "react";
import Button from "./Button";
export default function Card({color,hoverColor,cardName}) {
  return (
    <div
      className="grid grid-col  bg-gray-[100px] p-8 text-center 
              h-[500px] shadow-2xl hover:scale-110 duration-500 rounded-lg"
    >
      <h1 className="font-bold text-2xl">{cardName}</h1>
      <h1 className="font-bold text-2xl">$149</h1>
      <div className="font-stretch-50% flex flex-col gap-6">
      <p>Lorem ipsum dolor sit amet, consectetur.</p>
      <p> Ipsa delectus cum rerum quos? Numquam,</p>
      <p>fuga, similique ratio </p>
      </div>
      <Button color={color} text={"Start Trial →"} hoverColor={hoverColor} size={"w-[170px]"}/>
    </div>
  );
}
