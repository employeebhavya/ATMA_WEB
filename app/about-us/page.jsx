import React from "react";
import PageHead from "../components/PageHead";
import AboutSection1 from "../components/about/AboutSection1";
import AboutSection2 from "../components/about/AboutSection2";
import AboutSection3 from "../components/about/AboutSection3";
import BoardMembers from "../components/home1/BoardMembers";
import AboutSection4 from "../components/about/AboutSection4";

function page() {
  return (
    <>
      <PageHead
        title="Who We Are"
        subtitle="About Us"
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <AboutSection1 />
      <AboutSection2 />
      {/* <AboutSection3 /> */}
      <BoardMembers />
      <AboutSection4 />
    </>
  );
}

export default page;
