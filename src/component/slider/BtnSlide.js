import React from "react";
import leftArrow from "../icon/left-arrow.svg";
import rightArrow from "../icon/right-arrow.svg";

export default function BtnSlide({ slideAction, direction }) {
  return (
    <button
      onClick={slideAction}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
}
