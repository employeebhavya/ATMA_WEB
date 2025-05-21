import Image from "next/image";
import styles from "./BoardMembers.module.css";
import Link from "next/link";

const BoardMemebrs = [
  {
    name: "Dr Veerappan Sundar, MD",
    designation: "Chairman, ATMA",
    image: "/home/bm/1.jpg",
  },
  {
    name: "Dr. Ashok Kumar, MD",
    designation: "ATMA Board Member, Chairman, Project Review Committee",
    image: "/home/bm/2.jpg",
  },
  {
    name: "Dr. Einstein Arunachalam, MD",
    designation: "ATMA Board Member",
    image: "/home/bm/3.jpg",
  },
  {
    name: "Dr. Parithival, MD",
    designation: "ATMA Board Member",
    image: "/home/bm/4.jpg",
  },

  {
    name: "Dr. Deeptha Nedunchezian, MD",
    designation: "ATMA BOARD Member",
    image: "/home/bm/6.jpg",
  },
];
const treasurer = [
  {
    name: "Dr. Nedunchezian Sithian, MD",
    designation: "Treasurer ATMA",
    image: "/home/bm/5.jpg",
  },
];
const governer = [
  {
    name: "Dr. Rajan Dewar, MD",
    designation: "ATMA Governor- Michigan Chapter",
    image: "/home/bm/7.jpg",
  },
  {
    name: "Dr. Sivaraman Unni, M.D., F.A.C.P., F.A.C.G., A.G.A.F.",
    designation: "ATMA Governor- Baltimore/ Greater Washington Chapter",
    image: "/home/bm/8.jpg",
  },
  {
    name: "Dr. Rama Raju, MD",
    designation: "ATMA Governor- Newyork/New Jersey",
    image: "/home/bm/image-6.jpg",
  },
  {
    name: "Dr. Raja Rathinam, MD",
    designation: "ATMA Governor- Western Chapter",
    image: "/home/bm/10.jpg",
  },
  {
    name: "Dr. Manivannan Verasamy, MD",
    designation: "ATMA Governor- Georgia Chapter",
    image: "/home/bm/11.jpg",
  },
  {
    name: "Dr. Priya Ramesh, MD",
    designation: "ATMA Governor- Illinois Chapter",
    image: "/home/bm/12.jpg",
  },
  {
    name: "Dr. Karunakaravel, MD",
    designation: "ATMA governor- Ohio Chapter",
    image: "/home/bm/13.jpg",
  },
];
function BoardMembers() {
  return (
    <section className={styles.BoardMembers}>
      <div className={`container`}>
        <div className={styles.bmRow}>
          <div className={`${styles.bmCol2} md:flex justify-between`}>
            <div className={`md:w-[60%] relative ${styles.rightBorder}`}>
              <p className="font-light tracking-[3px]">LEADERSHIP</p>
              <h3>Our Board Members</h3>
              <div className="max-w-2xs sm:max-w-full grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-14 mt-8">
                {BoardMemebrs.map((bm, index) => (
                  <div key={index} className={`${styles.bmCol2Inner}`}>
                    <Image
                      className={styles.bmImg}
                      src={bm.image}
                      alt={bm.name}
                      width={262}
                      height={285}
                      style={{ marginBottom: "15px" }}
                      quality={100}
                    />
                    <h4>{bm.name}</h4>
                    <p>{bm.designation}</p>
                    <div className={styles.bmsocial}>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/topbar/linkedin.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-[19.1%] mt-8 md:mt-0">
              <p className="font-light tracking-[3px]">LEADERSHIP</p>
              <h3>Our Treasurer</h3>
              <div className="max-w-2xs sm:max-w-full mt-8">
                {treasurer.map((bm, index) => (
                  <div key={index} className={`${styles.bmCol2Inner}`}>
                    <Image
                      className={styles.bmImg}
                      src={bm.image}
                      alt={bm.name}
                      width={262}
                      height={285}
                      style={{ marginBottom: "15px" }}
                      quality={100}
                    />
                    <h4>{bm.name}</h4>
                    <p>{bm.designation}</p>
                    <div className={styles.bmsocial}>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/topbar/linkedin.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.bmCol2} mt-8`}>
            <div className="">
              <p className="font-light tracking-[3px]">LEADERSHIP</p>
              <h3>Our Governors</h3>
              <div className="max-w-2xs sm:max-w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-14 mt-8">
                {governer.map((bm, index) => (
                  <div key={index} className={`${styles.bmCol2Inner}`}>
                    <Image
                      className={styles.bmImg}
                      src={bm.image}
                      alt={bm.name}
                      width={262}
                      height={285}
                      style={{ marginBottom: "15px" }}
                      quality={100}
                    />
                    <h4>{bm.name}</h4>
                    <p>{bm.designation}</p>
                    <div className={styles.bmsocial}>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/topbar/linkedin.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoardMembers;
