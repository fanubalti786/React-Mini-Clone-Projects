import React from "react";
import Button from "../button";

export default function Expert() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div className=" grid grid-col-1 md:grid-cols-2 max-w-[1000px] gap-8 ">
        <div className="bg-transparent">
          <img
            className="h-[300px] w-[92%] md:w-full p-2 rounded-3xl"
            src={
              "https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg"
            }
            alt=""
          />
        </div>
        <div
          className=" flex flex-col
        gap-2 justify-center pb-9 p-1"
        >
          <h1 className="text-green-600 underline font-medium text-2xl">LEARN FROM EXPERTS</h1>
        <div className="grid grid-col gap-3">
            <p className="leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            dolor? Quas qui dolore velit nostrum mollitia odio ipsam numquam
            perferendis, aut labore libero quisquam voluptatem, expedita quia
            magnam dolores iusto!
          </p>
          <Button color={"bg-black"} hoverColor={"hover:bg-gray-600"}
        size={"w-[130px]"} text={"Get Start"}/>
        </div>
          
        </div>
      </div>
      {/* <hr className="border-t-4 border-gray-400 mt-" /> */}
    </div>
  );
}
