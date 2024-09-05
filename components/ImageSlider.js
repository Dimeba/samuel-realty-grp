"use client";

import { useState } from "react";
import styles from "./ImageSlider.module.scss";
//saljem prop slideru
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images);

  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currentIndex === images.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.imageContainer}>
      <div className={styles.leftArrow} onClick={prevSlide}>
        &#10094;
      </div>
      <div
        className={styles.slide}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.rightArrow} onClick={nextSlide}>
        &#10095;
      </div>
    </div>
  );
};

export default ImageSlider;
