import React, { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function MovieSlider() {
  const imgurl = [
    "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1500_.jpg", // Avengers Endgame
    "https://m.media-amazon.com/images/I/81xZQhxwP-L._AC_SL1500_.jpg", // The Dark Knight
    "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1000_.jpg"  // Interstellar
  ];

  const [counter, setCounter] = useState(0);
  const elementRef = useRef();

  const sliderRight = () => {
    if (counter < imgurl.length - 1) {
      setCounter(prev => prev + 1);
      elementRef.current.scrollLeft += elementRef.current.clientWidth;
    }
  };

  const sliderLeft = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1);
      elementRef.current.scrollLeft -= elementRef.current.clientWidth;
    }
  };

  return (
    <div className="relative w-full overflow-hidden px-4 py-8">
      {/* Left Arrow */}
      <button
        onClick={sliderLeft}
        className={`absolute top-1/2 -translate-y-1/2 left-2 p-3 bg-gradient-to-r from-gray-900/70 to-gray-800/40 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-10 ${
          counter === 0 ? "opacity-30 cursor-not-allowed" : ""
        }`}
      >
        <HiChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={sliderRight}
        className={`absolute top-1/2 -translate-y-1/2 right-2 p-3 bg-gradient-to-l from-gray-900/70 to-gray-800/40 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-10 ${
          counter === imgurl.length - 1 ? "opacity-30 cursor-not-allowed" : ""
        }`}
      >
        <HiChevronRight size={28} />
      </button>

      {/* Slider Images */}
      <div
        ref={elementRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {imgurl.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center"
          >
            <img
              src={src}
              alt={`Movie ${index}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {imgurl.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === counter ? "bg-red-500 scale-110" : "bg-gray-400"
            }`}
            onClick={() => {
              setCounter(index);
              elementRef.current.scrollLeft =
                elementRef.current.clientWidth * index;
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
