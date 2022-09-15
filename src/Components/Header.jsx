import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { CalenderContext } from "../context/CalenderContext";
import Styles from "./Header.module.css";

const Header = ({ data, loading, error }) => {
  const { calendar_banner_style, calendar_banner_text } = data;

  const { handleChange } = useContext(CalenderContext);

  const handleMonthsPrev = () => {
    handleChange(-1);
  };

  const handleMonthsNext = () => {
    handleChange(1);
  };

  return (
    <div>
      <div Style={calendar_banner_style} className={Styles.bcgImageBox}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {loading && (
          <CircularProgress size="7rem" className={Styles.progressBar} />
        )}
        {error && <h1>Something Went Wrong</h1>}
        <div className={Styles.heading}>
          <span className={Styles.leftArrow}>
            <iconify-icon
              icon="bi:arrow-left-circle-fill"
              onClick={handleMonthsPrev}
            ></iconify-icon>
          </span>
          {calendar_banner_text}
          <span className={Styles.rightArrow}>
            <iconify-icon
              icon="bi:arrow-right-circle-fill"
              className={Styles.rightArrow}
              onClick={handleMonthsNext}
            ></iconify-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
