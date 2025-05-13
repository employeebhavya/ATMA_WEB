"use client";

import { useState, useEffect } from "react";
import styles from "./DonationForm.module.css";

const DonationForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
    script.async = true;
    script.onload = () => {
      if (window.PayPal) {
        window.PayPal.Donation.Button({
          env: "sandbox",
          hosted_button_id: "QKY92W5FYUUW8",
          image: {
            src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
            alt: "Donate with PayPal button",
            title: "PayPal - The safer, easier way to pay online!",
          },
        }).render("#donate-button");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={styles.donationForm}>
      <div className="container">
        <div className={styles.formContainer}>
          <h2 className={styles.title}>How Much Would You Like To Donate?</h2>
          <div id="donate-button"></div>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
