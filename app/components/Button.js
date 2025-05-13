// components/Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  text = "Click me",
  bgColor = "#000",
  color = "#ffffff",
  hoverBgColor = "#ed0000",
  hoverTextColor = "#ffffff",
}) => {
  return (
    <button
      style={{
        "--bg-color": bgColor,
        "--text-color": color,
        "--hover-bg-color": hoverBgColor,
        "--hover-txt-color": hoverTextColor,
      }}
      className={styles.button}
    >
      {text}
    </button>
  );
};

export default Button;
