import React from "react";
import Header1 from "./components/Header1";
import Slider from "./components/Slider";
import MovieSlider from "./components/MovieSlider";
import ProductionHouseList from "./components/ProductionHouseList";
import MovieCategories from "./components/MovieCategories";

export default function App() {
  return (
    <div className=' '>
      <Header1/>
      <Slider/>
      {/* <MovieSlider/> */}
      <ProductionHouseList/>
      <MovieCategories/>
      
    </div>
  );
}
