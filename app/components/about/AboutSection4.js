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
              <p className="!text-sm font-light tracking-[3px]">GET IN TOUCH</p>
              <h4 className="mt-3">
                Uniting Tamil Healthcare Professionals Worldwide to Advance
                Medical Excellence, Empower Communities, and Create a Lasting
                Impact Through Compassion, Education, and Service.
              </h4>
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
