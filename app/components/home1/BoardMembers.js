import Image from "next/image";
import styles from "./BoardMembers.module.css";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    name: "Dr. Nedunchezian Sithian, MD",
    designation: "Treasurer ATMA",
    image: "/home/bm/5.jpg",
  },
  {
    name: "Dr. Deeptha Nedunchezian, MD",
    designation: "ATMA BOARD Member",
    image: "/home/bm/6.jpg",
  },
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
      <div className={`container bm`}>
        <div className={styles.bmRow}>
          <div className={styles.bmCol1}>
            <div className={styles.bmCol1Inner}>
              <p className="font-light tracking-[3px]">BOARD MEMBERS</p>
              <h3>Our Board Members</h3>
              <p>
                The following are our notable board members who contributed
                wholeheartedly to ATMA’s successful journey and are continuing
                to do the same.
              </p>
            </div>
          </div>
          <div className={styles.bmCol2}>
            <Carousel>
              <CarouselContent className="-ml-4">
                {BoardMemebrs.map((bm, index) => (
                  <CarouselItem
                    key={index}
                    className={`${styles.bmCol2Inner} md:pl-4 md:basis-1/4`}
                  >
                    <Image
                      className={styles.bmImg}
                      src={bm.image}
                      alt={bm.name}
                      width={262}
                      height={285}
                      style={{ marginBottom: "15px" }}
                    />
                    <h4>{bm.name}</h4>
                    <p>{bm.designation}</p>
                    {/*<div className={styles.bmsocial}>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/topbar/fb.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/topbar/insta.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/topbar/twitter.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/topbar/yt.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>*/}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-primary !text-white text-xl hover:bg-secondary hover:!text-black" />
              <CarouselNext className="bg-primary !text-white text-xl hover:bg-secondary hover:!text-black" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoardMembers;
