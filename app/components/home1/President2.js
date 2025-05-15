import Image from "next/image";
import styles from "./President2.module.css";

function President() {
  return (
    <section className={styles.President}>
      <div className="container">
        <div className={styles.presidentRow}>
          <div className={styles.presidentCol2}>
            <div>
              <div className={styles.presidentName}>
                <h4>Dr. Kabilan Dharmarajan</h4>
                <p>President Elect, ATMA</p>
              </div>
              <p className="mt-4">Chair of internal medicine </p>
              <p>Associate professor of medicine</p>
              <p>Lowell General Hospital/ TUFTS university</p>
              <p className="mt-4 text-justify">
                It is an honor to serve this vibrant community of compassionate
                Tamil healthcare professionals. Together, we will continue to
                expand our charitable impact and celebrate our shared heritage.
                I look forward to working with each of you to take ATMA to
                greater heights.
              </p>
            </div>
          </div>
          <div className={styles.presidentCol2}>
            <Image
              src="/home/bm/president2.jpg"
              alt="President"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default President;
