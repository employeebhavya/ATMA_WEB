import Image from "next/image";
import styles from "./President2.module.css";

function President() {
  return (
    <section className={styles.President}>
      <div className="container">
        <div className={styles.presidentRow}>
          <div className={styles.presidentCol2}>
            <p className="font-light tracking-[3px]">OUR MESSAGE</p>
            <h3 className="mb-4">
              ATMA in Action: Service, Support & the Road Ahead
            </h3>
            <div className={styles.presidentName}>
              <h4>Dr. Kabilan Dharmarajan</h4>
              <p>President Elect, ATMA</p>
            </div>
            <div>
              <p className="mt-2 italic ml-2">Chair of internal medicine </p>
              <p className="italic ml-2">Associate professor of medicine</p>
              <p className="italic ml-2">
                Lowell General Hospital/ TUFTS university
              </p>
            </div>
            <p className="mt-4 text-justify">
              It is an honor to serve this vibrant community of compassionate
              Tamil healthcare professionals. Together, we will continue to
              expand our charitable impact and celebrate our shared heritage. I
              look forward to working with each of you to take ATMA to greater
              heights.
            </p>
          </div>
          <div className={styles.presidentCol2}>
            <Image
              className="hidden md:block"
              src="/home/bm/president2.png"
              alt="President"
              width={500}
              height={500}
              quality={100}
            />
            <Image
              className="md:hidden"
              src="/home/bm/president2.jpg"
              alt="President"
              width={500}
              height={500}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default President;
