"use client";

//styles
import { useState } from "react";
import styles from "./Properties.module.scss";

//contentful
import { getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; //added in contenful Rich text field, got an error in the meantime

const Properties = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Definining tab contents
  const tabContents = [
    {
      id: "sales",
      label: "Sales",
      images: [
        "/images/6H-website-1.jpg",
        "/images/6H-website-2.jpg",
        "/images/6H-website-3.jpg",
        "/images/6H-website-4.jpg",
        "/images/6H-website-5.jpg",
      ],

      details: {
        address: "309 East 87th Street, Apt 6H",
        city: "Upper East Side, NY 10128",
        type: "Co-op",
        price: "$850,000",
        beds: "2",
        baths: "1",
      },
    },
    {
      id: "rentals",
      label: "Rentals",
      images: [
        "/images/rentals-1.jpg",
        "/images/rentals-2.jpg",
        "/images/rentals-3.jpg",
      ],
      details: {
        address: "250 East 40th Street, Apt 8C",
        city: "Murray Hill, NY 10016",
        type: "Condo",
        price: "$2.950",
        beds: "studio",
        baths: "1",
      },
    },
  ];

  // Finding the active tab content
  const activeContent = tabContents.find((tab) => tab.id === activeTab);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === activeContent.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activeContent.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.offers}>
      {/* Tabs for switching between sales and rentals */}
      <div className={styles.tabs}>
        {tabContents.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? styles.active : ""}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Display content based on the active tab */}
      <div className={styles.cards}>
        {activeContent && (
          <>
            <div className={styles.imageSlider}>
              <div
                className={styles.slides}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {activeContent.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${activeContent.details.type} Slide ${index + 1}`}
                  />
                ))}
              </div>
              <span
                className={`${styles.arrow} ${styles.left}`}
                onClick={prevSlide}
              >
                &#10094;
              </span>
              <span
                className={`${styles.arrow} ${styles.right}`}
                onClick={nextSlide}
              >
                &#10095;
              </span>
            </div>
            <div className={styles.propertyDetails}>
              <h3>{activeContent.details.address}</h3>
              <p>{activeContent.details.city}</p>
              <p>{activeContent.details.type}</p>
              <p>
                <strong>
                  {activeContent.details.type === "Rental"
                    ? "Monthly Rent:"
                    : "Asking Price:"}
                  {activeContent.details.price}
                </strong>{" "}
              </p>
              <p>
                Beds: {activeContent.details.beds} | Bath:{" "}
                {/* kontam da je visak koda, ali svaki put mi doda sam vs kad sacuvam kod, {" "} ovaj block */}
                {activeContent.details.baths}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Properties;
