import Image from "next/image";
import styles from "./NewsHome.module.css";
import Link from "next/link";
import Button from "../Button";

const BoardMemebrs = [
  {
    name: "Bringing Healthcare to Underserved Communities.",
    date: "March 01, 2025",
    image: "/home/news/image.png",
  },
  {
    name: "How ATMA Supports Tamil Students in the Medical Field",
    date: "March 01, 2025",
    image: "/home/news/image-1.png",
  },
  {
    name: "Advancements in Telemedicine and Its Impact on Rural Healthcare",
    date: "March 01, 2025",
    image: "/home/news/image-2.png",
  },
];

function NewsHome() {
  return (
    <section className={styles.NewsHome}>
      <div className="container">
        <div className={styles.nhRow}>
          <div className={styles.nhCol1}>
            <div className={styles.nhCol1Inner}>
              <p className="font-light tracking-[3px]">NEWS & EVENTS</p>
              <h3>Our Latest News</h3>
              <p>
                Stay informed with the latest updates from the American Tamil
                Medical Association (ATMA).
              </p>
            </div>
          </div>
          <div className={styles.nhCol2}>
            <div className={styles.nhCol2Inner1}>
              <Image
                className={styles.nhImgMain}
                src="/home/news-left.png"
                alt="News"
                width={300}
                height={300}
                style={{ marginBottom: "15px" }}
              />
              <p style={{ color: "var(--grey)" }}>March 01, 2025</p>
              <h4>The Role of Tamil Physicians in Global Healthcare</h4>
              <p>
                Tamil doctors worldwide are making a significant impact in
                medicine. Learn how their contributions are shaping global
                healthcare standards.
              </p>
              <Link className="mt-2" href="/blogs/medical-association">
                <Button
                  text="Read More"
                  bgColor="var(--secondary)"
                  color="var(--color-black)"
                />
              </Link>
            </div>
            <div className={styles.nhCol2Inner2}>
              {BoardMemebrs.map((bm, index) => (
                <div key={index} className={styles.nhCol2Inner2Inner}>
                  <Image
                    className={styles.nhImg}
                    src={bm.image}
                    alt={bm.name}
                    width={300}
                    height={300}
                  />
                  <div className={styles.nhCol2Inner2InnerContent}>
                    <p style={{ color: "var(--grey)" }}>{bm.date}</p>
                    <h4>{bm.name}</h4>
                    <Link href="/blogs/medical-association">
                      <Button
                        text="Read More"
                        bgColor="var(--secondary)"
                        color="var(--color-black)"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsHome;
