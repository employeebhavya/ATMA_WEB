import React from "react";
import Styles from "./Vision.module.css";

function VisionCounter() {
  return (
    <div className="container">
      <div
        className={`${Styles.counterRow} grid grid-cols-2 md:grid-cols-4 gap-8`}
      >
        <div className="text-center">
          <h2>20+</h2>
          <p>Years of Foundation</p>
        </div>
        <div className="text-center">
          <h2>800+</h2>
          <p>Members</p>
        </div>
        <div className="text-center">
          <h2>500+</h2>
          <p>Charitable Initiatives</p>
        </div>
        <div className="text-center">
          <h2>100+</h2>
          <p>Successful Medical Missions</p>
        </div>
      </div>
    </div>
  );
}

export default VisionCounter;
