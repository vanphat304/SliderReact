import React from "react";
import dataSlider from "./dataslider";
import BtnSlide from "./BtnSlide";
import { useState } from "react";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex < dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex == 1) {
      setSlideIndex(dataSlider.length);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const moveSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <div className="slider_container">
        {dataSlider.map((slideItem, index) => {
          return (
            <div
              className={slideIndex === index + 1 ? "slide active" : "slide"}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  `img/image${index + 1}` +
                  `${index + 1 === 1 ? ".png" : ".jpg"}`
                }
                alt=""
              />
              {/* <p className="slide-title">{slideItem.title}</p>
              <span className="slide-sub-title">{slideItem.subTitle}</span> */}
            </div>
          );
        })}
        <BtnSlide slideAction={prevSlide} direction={"prev"} />
        <BtnSlide slideAction={nextSlide} direction={"next"} />
        <div className="dots">
          {Array.from({ length: dataSlider.length }).map((item, index) => {
            return (
              <div
                onClick={() => {
                  moveSlide(index + 1);
                }}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
