import React from "react";
import DonationForm from "../components/DonationForm";
import Image from "next/image";

function page() {
  return (
    <div className="mt-[60px] md:mt-[4%] mb-[60px] md:mb-[6%]">
      <div className="container">
        <h2 className="text-center mb-8 md:max-w-[500px] mx-auto">
          Support Our Mission: Make a Difference Today
        </h2>
        <div className="">
          <Image
            src={"/donation-banner.png"}
            alt="donate"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <DonationForm />
      </div>
    </div>
  );
}

export default page;
