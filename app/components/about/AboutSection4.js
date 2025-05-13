import Image from "next/image";
import styles from "./AboutSection4.module.css";
import ContactForm from "./ContactForm";

function AboutSection4() {
  return (
    <section className={styles.AboutSection4}>
      <div className="container">
        <div className={styles.AboutSection4Row}>
          <div className={styles.AboutSection4Col}>
            <Image
              src="/about/about3.png"
              alt="About"
              width={600}
              height={600}
            />
            <div className={styles.contentab4}>
              <p>GET IN TOUCH</p>
              <h3>
                Where Faith Flourishes, Love Abounds Lifting Spirits, Serving
                Hearts
              </h3>
            </div>
          </div>
          <div className={styles.AboutSection4Col2}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection4;
