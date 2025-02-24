import React from "react";
import { FaHeadphonesSimple } from "react-icons/fa6";
export default function App() {
  return (

    <div className="flex flex-col items-center justify-center font-['Inter']">
  <nav className="flex max-w-[1200px] w-full justify-between">
    <div className="flex items-center list-none p-1 gap-5">
      <div className="items-center mb-2 mr-10 font-bold">
        <ul className="list-none p-1">
          <li className="text-3xl font-extrabold text-[#0B72E7] cursor-pointer">
            Razorpay
          </li>
        </ul>
      </div>
      <li className="text-[15px] font-bold text-gray-600 cursor-pointer hover:underline hover: text-gray-300">
        Payments
      </li>
      <li className="text-[15px] font-bold text-gray-600 cursor-pointer hover:underline hover: text-gray-300">
        Banking+
      </li>
      <li className="text-[15px] font-bold text-gray-600 cursor-pointer hover:underline hover: text-gray-300">
        Payroll
      </li>
      <li className="text-[15px] font-bold text-gray-600 cursor-pointer hover:underline hover: text-gray-300">
        Engage
      </li>
      <li className="text-[15px] font-bold text-gray-600 cursor-pointer hover:underline hover: text-gray-300">
        Partners
      </li>
      <li className="text-[15px] font-bold text-gray-600 cursor-pointer hover:underline hover: text-gray-300">
        Resources
      </li>
      <li className="text-[15px] font-bold text-gray-600 cursor-pointer hover:underline hover: text-gray-300">
        Pricing
      </li>
    </div>
    <div className="flex items-center list-none p-1 gap-5">
      <li className="size-10 p-1 mt-3 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="India Flag"
        />
      </li>
      <span className="cursor-pointer">⌃</span>
      <FaHeadphonesSimple size={22} className="text-gray-600 cursor-pointer" />
      <li className="border border-gray-300 rounded-lg cursor-pointer">
        <button className="p-1 px-5 text-[14px] font-medium text-[#0B72E7] cursor-pointer">
          Login
        </button>
      </li>
      <li className="border border-gray-300 rounded-lg bg-[#0B72E7] hover:bg-[#095bb5] transition cursor-pointer">
        <button className="p-1 px-4 text-[14px] font-medium text-white cursor-pointer">
          Sign Up →
        </button>
      </li>
    </div>
  </nav>

  <div className="flex w-full justify-center relative">
    <img
      className="w-full max-w-[1200px]"
      src="https://framerusercontent.com/images/kuxCWrCpVyLY8wQnUqqRsmDMmE.png?scale-down-to=1024"
      alt=""
    />
    <div className="absolute top-[39%] left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-4xl font-bold text-[#0B72E7]">Advanced Payment Solutions</h1>
      <p className="mt-2 text-4xl font-bold text-gray-800">for India’s finest disruptors.</p>
      <p className="mt-4 text-[16px] font-normal text-gray-600">
        Powerful Automation | Smart Dashboard | Integrated Access
      </p>
      <div className="flex items-center justify-center gap-6 mt-6">
        <button className="px-6 py-3 bg-[#0B72E7] hover:bg-[#095bb5] transition text-white text-[16px] font-medium rounded-lg cursor-pointer">
          Get Started →
        </button>
        <p className="text-[16px] font-medium text-[#0B72E7] cursor-pointer">
          Know More
        </p>
      </div>
    </div>
  </div>
</div>



    
  );
}
