import React from "react";
import Styles from "./Vision.module.css";
import Image from "next/image";

function Vision() {
  return (
    <section className={Styles.visionSection}>
      <div className="container">
        <div className={Styles.visionMainRow}>
          <div className={Styles.visionRow}>
            <div className={Styles.visionCol}>
              <h3>Vision</h3>
              <Image
                src={"/home/visionnew.svg"}
                width={50}
                height={50}
                alt="vision"
              />
              <p className="text-justify">
                ATMA envisions accessible healthcare for all, uniting Tamil
                healthcare professionals to drive global medical excellence
                through collaboration and outreach.
              </p>
            </div>
            <div className={Styles.visionCol}>
              <h3>Mission</h3>
              <Image
                src={"/home/missionnew.svg"}
                width={50}
                height={50}
                alt="vision"
              />
              <p className="text-justify">
                We strive to improve healthcare access, support underserved
                communities, and foster professional growth while upholding
                Tamil values of compassion and service.
              </p>
            </div>
            <div className={Styles.visionCol}>
              <h3>Donate</h3>
              <Image
                src={"/home/donatenew.svg"}
                width={50}
                height={50}
                alt="vision"
              />
              <p className="text-justify">
                Your support helps provide medical aid, health education, and
                outreach programs creating a lasting impact and a healthier
                future for all.
              </p>
            </div>
          </div>
          {/* counter-row */}
          <div
            className={`${Styles.counterRow} grid grid-cols-2 md:grid-cols-4 gap-8`}
          >
            <div className="text-center">
              <h2>20+</h2>
              <p>Years of Foundation</p>
            </div>
            <div className="text-center">
              <h2>800+</h2>
              <p>Members</p>
            </div>
            <div className="text-center">
              <h2>500+</h2>
              <p>Charitable Initiatives</p>
            </div>
            <div className="text-center">
              <h2>100+</h2>
              <p>Successful Medical Missions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
