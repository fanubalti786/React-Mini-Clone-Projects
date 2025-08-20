import React from "react";
import Button from "../button";
import Card from "../Card";

export default function Plans() {
  return (
    <div className="w-full min-h-full
     bg-gray-200">
      <div className="max-w-[1250px] mx-auto 
      grid px-16 py-8  md:grid-cols-2 lg:grid-cols-3 gap-8 box-border md:p-17">
        
        <Card color={"bg-green-600"} hoverColor={"hover:bg-green-800"} cardName={"Web Development"}/>
        <Card color={"bg-black"} hoverColor={"hover:bg-gray-800"} cardName={"Degital Marketing"}/>
        <Card color={"bg-green-600"} hoverColor={"hover:bg-green-800"} cardName={"App Development"}/>

      </div>
      <hr className="border-t-4 border-gray-400" />
    </div>
  );
}
