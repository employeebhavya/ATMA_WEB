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
        description="In January 2005, a group of ten Tamil physicians in the United States established the American Tamil Medical Association (ATMA). Now there are more than 800 physicians and allied healthcare professionals as members and the membership is growing. It is a 501(c) 3, IRS tax exempt, charitable organization."
        bgImage="/pageHeader/about.webp"
        mobileImage="/pageHeader/about-mobile.webp"
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
