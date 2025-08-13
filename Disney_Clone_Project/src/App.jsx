import React from "react";
import Header1 from "./components/Header1";
import Slider from "./components/Slider";
import MovieSlider from "./components/MovieSlider";

export default function App() {
  return (
    <div className='bg-black/80 '>
      <Header1/>
      <Slider/>
      {/* <MovieSlider/> */}
    </div>
  );
}
