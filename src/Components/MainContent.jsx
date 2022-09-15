import React from "react";
import Card from "./Card";
import Styles from "./MainContent.module.css";

const MainContent = ({ data }) => {
  const { days } = data;

  return (
    <div>
      <div className={Styles.gridBox}>
        {days.map((el) => (
          <Card data={el} key={el._id} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
