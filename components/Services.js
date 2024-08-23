"use client";

//styles
import { useState } from "react";
import styles from "./Services.module.scss";

const Services = () => {
  const [activeTab, setActiveTab] = useState("sales");

  // Definining tab contents
  const tabContents = [
    {
      id: "sales",
      label: "Sales",
      image: "/images/sales.jpg",
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
      image: "/images/rentals.jpg",
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
              <img src={activeContent.image} alt={activeContent.details.type} />
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

export default Services;
