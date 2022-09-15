import React from "react";
import Styles from "./Card.module.css";

const Card = ({ data }) => {
  const {
    card_body,
    card_color,
    card_header,
    card_image,
    day_of_the_week,
    day_of_the_month,
  } = data;

  return (
    <div className={Styles.cardBox}>
      <div
        className={card_image !== undefined ? Styles.firstBox : Styles.firstAlt}
      >
        <h4>{day_of_the_week.toUpperCase()}</h4>
        <h1>{day_of_the_month}</h1>
      </div>
      <div
        className={
          card_image !== undefined ? Styles.middleBox : Styles.secondAlt
        }
        Style={card_color}
      >
        <h3>{card_header}</h3>
        <p>{card_body}</p>
        <button Style={card_color}>Schedule Post</button>
      </div>
      <div className={Styles.lastBox}>
        <img src={card_image} alt="" />
      </div>
    </div>
  );
};

export default Card;
