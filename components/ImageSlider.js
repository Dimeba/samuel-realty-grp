"use client";

import { useState } from "react";

//styles

import styles from "./ImageSlider.module.scss";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className={styles.slide}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={styles.image}
        />
      </div>
      <div className={styles.rightArrow} onClick={nextSlide}>
        &#10095;
      </div>
    </div>
  );
};

export default ImageSlider;
