import Image from "next/image";
import styles from "./AtmaChapterSection1.module.css";
import Button from "../Button";
import Link from "next/link";

function AtmaChapterSection1() {
  return (
    <section className={styles.AtmaChapterSection1}>
      <div className="container">
        <div className={styles.AtmaChapterSection1Row}>
          <div className={styles.AtmaChapterSection1Col}>
            <Image src="/atmac/1.png" alt="Chapter" width={600} height={600} />
          </div>
          <div className={styles.AtmaChapterSection1Col2}>
            <h3>OUR MISSION</h3>
            <p>
              For over 20 years, ATMA has been committed to uplifting
              communities through medical outreach, education, and professional
              support. Our chapters play a vital role in driving this mission
              forward by organizing free health check-up camps, raising
              awareness about preventive healthcare, and supporting local
              hospitals with essential resources. Additionally, we provide
              scholarships and mentorship to medical students, ensuring the next
              generation of healthcare professionals is well-equipped to serve
              the community.
            </p>
            <div className={styles.iconBoxAtmac}>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/1.svg" alt="icon" width={50} height={50} />
                <h4>Vision/Mission</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/2.svg" alt="icon" width={50} height={50} />
                <h4>Our Growth</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/3.svg" alt="icon" width={50} height={50} />
                <h4>Charitable Activity</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/4.svg" alt="icon" width={50} height={50} />
                <h4>National and International</h4>
              </div>
            </div>
            {/* <Link href="/">
              <Button
                text="View More"
                bgColor="var(--secondary)"
                color="var(--color-black)"
              />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AtmaChapterSection1;
