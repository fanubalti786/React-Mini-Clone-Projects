import React, { useState } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Expert from "./components/expertSection/Expert";
import EmailCapture from "./components/emailCapture/EmailCapture";
import Plans from "./components/plans/Plans";
import Footer from "./components/Footer/Footer";

export default function App() {
    const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Header toggle={toggle} setToggle={setToggle}/>
      <HeroSection toggle={toggle} setToggle={setToggle}/>
      <Expert/>
      <EmailCapture/>
      <Plans/>
      <Footer/>
    </div>
  );
}
