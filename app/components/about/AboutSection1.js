import Image from "next/image";
import styles from "./AboutSection1.module.css";

function AboutSection1() {
  return (
    <section className={styles.AboutSection1}>
      <div className="container">
        <div className={styles.AboutSection1Row}>
          <div className={styles.AboutSection1Col}>
            <div className={styles.AboutSection1ColInner}>
              <Image
                className={styles.AboutSection1ColInner1Img}
                src="/about/about.png"
                alt="About"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.AboutSection1ColInner2}>
              {/* <p>ABOUT US</p> */}
              <h3>ABOUT US</h3>
              <p>
                The American Tamil Medical Association (ATMA) is a nonprofit
                organization founded to unite Tamil healthcare professionals
                across the United States. With over 800 members, ATMA serves as
                a platform for medical professionals to collaborate, share
                knowledge, and contribute to global healthcare improvements. Our
                mission is to provide accessible healthcare to underserved
                communities through medical camps, health awareness programs,
                and charitable outreach. We are committed to advancing medical
                education and supporting Tamil communities globally. Through
                annual conventions, professional networking, and humanitarian
                initiatives, ATMA fosters a strong sense of unity and purpose
                among Tamil medical professionals. Our charitable arm, ATMA-CF,
                extends our impact by funding scholarships, medical supplies,
                and disaster relief efforts, ensuring that healthcare reaches
                those who need it most. At ATMA, we believe in combining
                professional excellence with social responsibility to create a
                lasting impact in the field of healthcare.
              </p>
            </div>
          </div>
          <div className={styles.AboutSection1Col2}>
            <h3>
              Faith in Every Step, Love<br></br> in Every Action Where Love
              Inspires.
            </h3>
            <p>
              The Association was founded with a mission to unite Tamil
              healthcare professionals and leverage their expertise to improve
              healthcare access globally. Beyond organizing medical camps and
              health awareness programs, ATMA actively supports disaster relief
              efforts and funds essential medical resources. The association
              serves as a vital networking hub, providing professional
              development opportunities and fostering a strong sense of
              community. Through its charitable foundation (ATMA-CF), the
              organization extends its reach by supporting hospitals, offering
              scholarships, and ensuring sustainable healthcare improvements in
              Tamil Nadu and beyond.
            </p>
          </div>
          <div className={styles.AboutSection1Col3}>
            <div className={styles.asBox}>
              <h4>Vision</h4>
              <p>
                The American Tamil Medical Association (ATMA) envisions a future
                where healthcare is accessible to all, regardless of geographic
                or economic barriers. Our goal is to create a strong network of
                Tamil healthcare professionals dedicated to driving positive
                change in medical care and community health. By fostering
                collaboration, knowledge-sharing, and humanitarian outreach, we
                aim to empower communities, enhance global healthcare standards,
                and uphold the values of service and rooted in our Tamil
                heritage.
              </p>
            </div>
            <div className={styles.asBox}>
              <h4>Mission</h4>
              <p>
                The American Tamil Medical Association (ATMA) is committed to
                advancing healthcare and supporting Tamil communities worldwide
                through medical expertise, charitable outreach, and professional
                collaboration. Our mission is to unite Tamil physicians and
                healthcare professionals in the U.S. to improve healthcare
                access, deliver medical aid to underserved communities, and
                promote health awareness globally. We aim to foster professional
                growth, provide educational opportunities.
              </p>
            </div>
            <div className={styles.asBox}>
              <h4>Donate</h4>
              <p>
                Your support can make a difference! By donating to the American
                Tamil Medical Association (ATMA), you help us provide medical
                aid, support health education, and organize outreach programs
                for underserved communities. Every contribution, big or small,
                empowers us to expand our efforts, deliver critical care, and
                create a lasting impact in the lives of those in need. Join us
                in building a healthier future — your generosity fuels our
                mission to serve and uplift communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection1;
