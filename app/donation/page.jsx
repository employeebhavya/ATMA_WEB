import React from "react";
import DonationForm from "../components/DonationForm";
import Image from "next/image";
import styles from "./page.module.css";

function page() {
  return (
    <div className="mt-[60px] md:mt-[4%] mb-[60px] md:mb-[6%]">
      <div className="container">
        <h2 className="text-center mb-8 md:max-w-[40%] mx-auto">
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
        <div className="mt-16">
          <div className="container">
            <h3 className="mb-4">Why Donate?</h3>
            <p className="mb-2">
              Your donation helps bring us closer to a healthier future for all.
            </p>

            <p className="flex gap-2">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>Improving Healthcare Access:</strong> Your support
                enables us to provide medical care to underserved communities,
                breaking down barriers to healthcare and improving lives.
              </span>
            </p>
            <p className="flex gap-2">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>Supporting Healthcare Professionals:</strong> With your
                help, we empower Tamil healthcare professionals to grow
                professionally and collaborate for a stronger healthcare system.
              </span>
            </p>
            <p className="flex gap-2">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>Fostering Compassionate Service:</strong> Grounded in
                Tamil values of compassion and service, every donation ensures
                we uphold the highest standards of care and community outreach.
              </span>
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="container">
            <h3 className="mb-4">How Your Donation Helps:</h3>
            <p className="flex gap-2">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>$50:</strong> Provides essential medical supplies such
                as bandages, antibiotics, and diagnostic tools to underserved
                clinics.
              </span>
            </p>
            <p className="flex gap-2">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>$100:</strong>
                Supports health education programs, reaching 50 individuals in
                rural areas, teaching them about hygiene, disease prevention,
                and basic healthcare.
              </span>
            </p>
            <p className="flex gap-2">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>$250:</strong> Funds transportation and logistical costs
                for our mobile medical units, allowing us to reach remote
                communities with medical services.
              </span>
            </p>
            <p className="flex gap-2">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>$500:</strong> Helps organize outreach medical camps,
                providing free health checkups, screenings, and treatment to
                hundreds of people in underserved areas.
              </span>
            </p>
            <p className="flex gap-2">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>$1000:</strong>
                Provides scholarships for Tamil healthcare professionals,
                enabling them to receive advanced training and improve the
                quality of healthcare in their communities.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
