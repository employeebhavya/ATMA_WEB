// components/GoogleMap.js
import Styles from "./Googlemap.module.css";

const GoogleMap = () => {
  return (
    <div className={Styles.gmap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.945398339073!2d-118.23619269999999!3d34.0452717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7ba687a58f3%3A0x5b1f16f6f37e6567!2s303%20S%20Hewitt%20St%2C%20Los%20Angeles%2C%20CA%2090013%2C%20USA!5e0!3m2!1sen!2sin!4v1731422268607!5m2!1sen!2sin"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
