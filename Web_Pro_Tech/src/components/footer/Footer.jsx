import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import FooterItems from "../footerItems";
export default function Footer() {
  const arr = [
    {
      Tittle: "Solutions",
      item1:"analytics",
      item2:"marketing",
      item3:"commerce",
      item4:"insights"
    },

    {
      Tittle: "Support",
      item1:"Pricing",
      item2:"Documents",
      item3:"Guides",
      item4:"Api_Status"
    },

    {
      Tittle: "Company",
      item1:"About",
      item2:"Blogs",
      item3:"Jobs",
      item4:"Press",
      item5:"Careers"
    },
  ];
  return (
    <div
      className="min-h-[500px] flex justify-center items-center
    bg-[#2699fb]"
    >
      <div
        className="max-w-[1250px] mx-auto grid md:grid-cols-2
         px-4 md:px-12 py- gap-8 md:gap-16"
      >
        <div className="">
          <h1 className="text-2xl font-bold pt-2 ">WsCube Teck</h1>
          <p className="text-gray-100 pt-4 leading-loose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            perspiciatis cum fugiat adipisci ea accusantium labore corporis
            ipsum numquam quaerat aliquid, dolorum velit aspernatur ducimus
            omnis quo iste nemo ipsam.
          </p>
          
          <div className="flex gap-10 pt-12 text-gray-100">
            <SlSocialFacebook className="cursor-pointer hover:text-gray-400 text-3xl" />
            <SlSocialInstagram className="cursor-pointer hover:text-gray-400 text-3xl" />
            <SlSocialLinkedin className="cursor-pointer hover:text-gray-400 text-3xl" />
            <SlSocialTwitter className="cursor-pointer hover:text-gray-400 text-3xl" />
            <SlSocialGithub  className="cursor-pointer hover:text-gray-400 text-3xl" />
          </div>
        </div>

        <div className="flex justify-between p-2">
            {
                arr.map((item,index) =>
                {
                    return(
                        <FooterItems key={index} lists={item} />
                    )
                })
            }
          
          
        </div>
      </div>
    </div>
  );
}
