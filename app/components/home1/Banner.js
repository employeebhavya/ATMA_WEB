import React from "react";
import styles from "./Banner.module.css";
import Link from "next/link";
import Button from "../Button";

const Banner = () => {
  return (
    <section className={styles.banner}>
      {/* Video Background */}
      <div className={`${styles.videoContainer} hidden md:block`}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source src="/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={`${styles.videoContainer} md:hidden`}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source src="/mobile-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className="container">
          <h1>Welcome To American Tamil Medical Association</h1>
          <p className="text-justify">
            Founded in 2005, ATMA is a nonprofit organization dedicated to
            connecting Tamil physicians and healthcare professionals across the
            U.S. Through medical camps, charitable initiatives, and educational
            events, we aim to make a meaningful impact on global healthcare
            while celebrating our Tamil heritage.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/contact">
              <Button
                text="Know More"
                bgColor="var(--secondary)"
                color="var(--color-white)"
                hoverBgColor="var(--color-white)"
                hoverTextColor="var(--primary)"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
