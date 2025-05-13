import React from "react";
import PageHead from "../components/PageHead";
import DonationForm from "../components/DonationForm";

function page() {
  return (
    <>
      <PageHead
        title="Home"
        subtitle="Donation"
        description="Your contribution plays a vital role in bringing quality healthcare to underserved communities. Through ATMA-CF, we organize free medical camps, provide essential healthcare resources, and support aspiring medical students with scholarships."
        bgImage="/pageHeader/contact.webp"
        mobileImage="/pageHeader/contact-mobile.webp"
      />
      <DonationForm />
    </>
  );
}

export default page;
