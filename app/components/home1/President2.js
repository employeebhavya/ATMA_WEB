import Image from "next/image";
import styles from "./President2.module.css";

function President() {
  return (
    <section className={styles.President}>
      <div className="container">
        <div className={styles.presidentRow}>
          <div className={styles.presidentCol2}>
            <div>
              <h4 className={styles.namehead}>Dr. Kabilan Dharmarajan</h4>
              <p className={styles.deshead}>President Elect, ATMA</p>
              <p>Chair of internal medicine </p>
              <p>Associate professor of medicine</p>
              <p>Lowell General Hospital/ TUFTS university</p>
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
