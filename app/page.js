import React from "react";
import AboutHome from "./components/home1/AboutHome";
import President from "./components/home1/President";
import President2 from "./components/home1/President2";
import BoardMembers from "./components/home1/BoardMembers";
import NewsHome from "./components/home1/NewsHome";
import TestimonialSlider from "./components/home1/TestimonialSlider";
import ThirukuralSlider from "./components/home1/Thirukural";
import Banner from "./components/home1/Banner";
import Vision from "./components/home1/Vision";

function Home() {
  return (
    <>
      <Banner />
      <ThirukuralSlider />
      <AboutHome />
      <Vision />
      <President />
      <President2 />
      <BoardMembers />
      <NewsHome />
      <TestimonialSlider />
    </>
  );
}

export default Home;
