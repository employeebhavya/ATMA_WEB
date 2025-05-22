// components/GoogleMap.js
import Styles from "./Googlemap.module.css";

const GoogleMap = () => {
  return (
    <div className={Styles.gmap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.616142365071!2d-74.10876452523767!3d40.594227644819185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24ebe0101f0df%3A0xe8336bb99d20feca!2s207%20Benedict%20Rd%2C%20Staten%20Island%2C%20NY%2010304%2C%20USA!5e0!3m2!1sen!2sin!4v1747923072386!5m2!1sen!2sin"
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
