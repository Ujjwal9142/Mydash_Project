import React from "react";
import SchedulePic from "./assets/schedule.png";
import "./styles/leftside.css";

const LeftSide = () => {
  return (
    <div className="leftside">
      <img src={SchedulePic} alt="Schedule" className="leftside__img" />
      <div className="leftside__body">
        <h2 className="leftside__heading">Choose a date range</h2>
        <p className="leftside__desc1">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <p className="leftside__desc2">
          adipiscing elit. Sed do eiusmod tempor.
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
