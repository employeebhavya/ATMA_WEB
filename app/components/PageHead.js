// PageHead.js
import Link from "next/link";
import styles from "./PageHead.module.css";
import { HiChevronRight } from "react-icons/hi2";
import Image from "next/image";

function PageHead({
  title,
  subtitle,
  description,
  bgImage,
  mobileImage,
  link,
}) {
  return (
    <section
      className={styles.PageHead}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className={styles.PageHeadRow}>
          <div className={styles.PageHeadCol}>
            <div className={styles.breadcrumb}>
              <Link href={link || "/"}>{title}</Link> <HiChevronRight />{" "}
              <p>{subtitle}</p>
            </div>
            <h2>{subtitle}</h2>
            <p>{description}</p>
          </div>
          <Image
            className={styles.mobileImg}
            src={mobileImage}
            alt="Head"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default PageHead;
