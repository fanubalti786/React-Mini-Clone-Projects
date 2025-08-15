// self made project
// import React, { useRef, useState } from "react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// export default function Slider() {
//   const imgurl = [
//     "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1683740128939-332a77523d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D",
//     "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D",
//     "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww"
//   ];

//   const [counter, setCounter] = useState(0);
//   const elementRef = useRef();
//   const screenWidth = window.innerWidth;

//   const sliderRight = (element) => {
//     if (counter < imgurl.length - 1) {
//       // last se aage na jaye
//       setCounter((prev) => prev + 1);
//       element.scrollLeft += screenWidth;
//     }
//   };

//   const sliderLeft = (element) => {
//     if (counter > 0) {
//       // zero se neeche na jaye
//       setCounter((prev) => prev - 1);
//       element.scrollLeft -= screenWidth;
//     }
//   };
//   return (
//     <div className="relative min-w-[990px]">
//       <HiChevronLeft
//         onClick={() => {
//           sliderLeft(elementRef.current);
//         }}
//         className="hidden [@media(min-width:400px)]:block 
//     text-[30px] absolute mx-4 mt-[167px] cursor-pointer"
//       />
//       <HiChevronRight
//         onClick={() => {
//           sliderRight(elementRef.current);
//         }}
//         className=" hidden [@media(min-width:400px)]:block sm:block 
//     text-[30px] absolute mr-4 mt-[167px] cursor-pointer  right-0"
//       />
//       <div
//         className="flex overflow-x-auto w-full 
//     py-4 px-16 pl-6 scrollbar-hide justify-between scroll-smooth"
//         ref={elementRef}
//       >
//         {imgurl.map((item, index) => {
//           return (
//             <img
//               src={item}
//               alt=""
//               className={`min-w-full h-[310px] object-left-top object-cover m-5
//         rounded-md hover:border-[4px] border-gray-400 cursor-pointer transition-all
//         duration-100 ease-in-out 
//         ${counter == 1 ? "ml-[43px]" : ""} 
//         ${counter == 2 ? "ml-[52px]" : ""}
//         ${counter == 3 ? "ml-[56px]" : ""}
//         `}
//             />
//           );
//         })}
//       </div>
//       <div className="flex absolute ml-[50%] mt-[-20px]">
//         {imgurl.map((item,index) => {
//         return <div
//             className={`${
//               counter == index ? "bg-blue-600" : "bg-gray-400"
//             } w-3 h-3 rounded-full transition-all duration-300 cursor-pointer`}
//           ></div>;
//         })}
//       </div>
//     </div>
//   );
// }






// ChatGpt help version
import React, { useRef, useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Slider() {
  const imgurl = [
    "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1683740128939-332a77523d51?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1510827220565-c6a086ff31c8?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60"
  ];

  const [counter, setCounter] = useState(0);
  const elementRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isAnimating, setIsAnimating] = useState(false);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Re-adjust scroll when width changes
  useEffect(() => {
    elementRef.current.scrollTo({
      left: counter * screenWidth,
      behavior: "auto" // fixed from "instant"
    });
  }, [screenWidth, counter]);

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCounter(index);
    elementRef.current.scrollTo({
      left: index * screenWidth,
      behavior: "smooth"
    });
    setTimeout(() => setIsAnimating(false), 400);
  };

  const sliderRight = () => {
    if (counter < imgurl.length - 1) {
      goToSlide(counter + 1);
    }
  };

  const sliderLeft = () => {
    if (counter > 0) {
      goToSlide(counter - 1);
    }
  };

  return (
    <div className="relative min-w-[990px]">
      <HiChevronLeft
        onClick={sliderLeft}
        className="hidden [@media(min-width:300px)]:block 
    text-[30px] absolute mx-4 mt-[167px] cursor-pointer"
      />
      <HiChevronRight
        onClick={sliderRight}
        className=" hidden [@media(min-width:300px)]:block sm:block 
    text-[30px] absolute mr-4 mt-[167px] cursor-pointer  right-0"
      />
      <div
        className="flex overflow-x-auto w-full
    py-4 px-16 pl-6 scrollbar-hide justify-between scroll-smooth"
        ref={elementRef}
      >
        {imgurl.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt=""
              className={`min-w-full shrink h-[310px] object-left-top object-cover m-5
        rounded-md hover:border-[4px] border-gray-400 cursor-pointer transition-all
        duration-100 ease-in-out 
        ${counter == 1 ? "ml-[43px]" : ""} 
        ${counter == 2 ? "ml-[52px]" : ""}
        ${counter == 3 ? "ml-[56px]" : ""}
        `}
            />
          );
        })}
      </div>
      <div className="flex absolute ml-[50%] mt-[-20px]">
        {imgurl.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`${
                counter == index ? "bg-blue-600" : "bg-gray-400"
              } w-3 h-3 rounded-full transition-all duration-300 cursor-pointer`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
