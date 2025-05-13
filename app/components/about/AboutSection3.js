import style from "./AboutSection3.module.css";
import ScrollingGallery from "./ScrollingGallery";

function AboutSection3() {
  return (
    <section className={style.AboutSection3}>
      <div className="container">
        <div className={style.as3Content}>
          <p>OUR MINISTRIES</p>
          <h3>The Christians of All Ages Discover Their Mission</h3>
        </div>
      </div>
      <div className={style.AboutSection3Row}>
        <ScrollingGallery />
      </div>
    </section>
  );
}

export default AboutSection3;
