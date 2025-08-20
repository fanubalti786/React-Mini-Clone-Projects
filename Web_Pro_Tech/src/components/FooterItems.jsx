import React from "react";

export default function FooterItems({lists}) {
  return (
    <div className="grid gap-8">
      <h1 className="font-bold text-1xl">{lists.Tittle}</h1>
      <p className="text-gray-100 hover:underline cursor-pointer">{lists.item1}</p>
      <p className="text-gray-100 hover:underline cursor-pointer">{lists.item2}</p>
      <p className="text-gray-100 hover:underline cursor-pointer">{lists.item3}</p>
      <p className="text-gray-100 hover:underline cursor-pointer">{lists.item4}</p>
    </div>
  );
}
