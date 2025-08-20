import React, { useState } from 'react'
import { MdRoundaboutRight } from "react-icons/md";
import { GiCompanionCube } from "react-icons/gi";
import { GrResources } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { HiHome} from "react-icons/hi";
import HeaderItems from '../headerItems/HeaderItems';
export default function Header({toggle,setToggle}) {

  const menu = [
  {
    name: "HOME",
    Icon: HiHome,
  },

  {
    name: "COMPANY",
    Icon: GiCompanionCube,
  },

  {
    name: "RESOURCES",
    Icon: GrResources,
  },

  {
    name: "ABOUT",
    Icon: MdRoundaboutRight,
  },

  {
    name: "CONTACT",
    Icon: IoMdContacts,
  },

  {
    name: "BLOGS",
    Icon: FaBlogger,
  },
];
  // const [toggle, setToggle] = useState(false)
  return (
    <div>
    <div className='flex justify-center bg-[#2699fb]'>
      <div className='w-full max-w-[1250px] 
      items-center flex justify-between py-[10px] pt-[18px] px-3 '>
        <div className='md:text-2xl font-bold pb-1'>
            WebPro Teck
        </div>
        {
            toggle? <AiOutlineClose onClick={() => {setToggle(!toggle)}} className='text-white
            cursor-pointer text-2xl md:hidden' />
            : <AiOutlineMenu onClick={() => {setToggle(!toggle)}} className='text-white
            cursor-pointer text-2xl md:hidden'/> 
        }
        
        <ul className='hidden md:flex text-white gap-4'>
            {menu.map((item,index) => 
            {
              return(
              <HeaderItems key={index} name={item.name} Icon={item.Icon}/>
                  )
            })}
        </ul>

        

      </div>
      
    </div>

            {/* fro responsive */}
        <div className={` ${toggle? "block": "hidden"} duration-300 md:hidden flex flex-col gap-4  text-white bg-black
        top-[52px] w-full h-[calc(100vh-56px)] `}>
            {menu.map((item,index) => 
            {
              return(
              <HeaderItems key={index} name={item.name} Icon={item.Icon}/>
                  )
            })}
        </div>
    </div>
    
    
  )
}
