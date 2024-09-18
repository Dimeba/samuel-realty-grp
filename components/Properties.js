"use client";

import styles from "./Properties.module.scss";
import Link from "next/link";

//hooks
import { useState, useEffect } from "react";

// Contentful
import { getEntries } from "@/lib/contentful";
import ImageSlider from "@/components/ImageSlider";

//start condition, empty array and showing Sales properties
const Properties = ({ selectedLocation, isPastSales }) => {
  const [properties, setProperties] = useState([]);
  const [activeTab, setActiveTab] = useState("Sales");

  useEffect(() => {
    //preko useEffecta uzimam podatke sa Contenfula
    const propertiesData = async () => {
      //asinhrona funckija, povlaci podatke u pozadini
      const entries = await getEntries("listings", selectedLocation);

      console.log(entries);
      setProperties(entries.items);
    };
    propertiesData();
  }, [selectedLocation]);

  //active Tab condition
  const tabClick = (tab) => {
    setActiveTab(tab);
  };

  const showProperties = properties.filter((item) => {
    console.log(item);
    // Filtriranje prema statusu: true  false
    const statusMatch = isPastSales
      ? item.fields.status === true // Ako je "Past Sales", prikazuj zatvorene (status je true)
      : item.fields.status === false; // Ako je "Active Listings", prikazuj aktivne (status je false)

    // Filtriranje prema lokaciji (New York ili Long Island)
    const locationMatch =
      selectedLocation === "All" || item.fields.location === selectedLocation;

    // Vraćamo rezultat kombinovanih filtera: lokacija + status + aktivna kartica (Sales ili Rentals)
    return (
      statusMatch && locationMatch && item.fields.propertyCategory === activeTab
    );
  });

  return (
    <div className={styles.mainContainer}>
      {/* Tab Navigation */}
      {!isPastSales && (
        <div className={styles.tabNavigation}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Sales" ? styles.active : ""
            }`}
            onClick={() => tabClick("Sales")}
          >
            Sales
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Rentals" ? styles.active : ""
            }`}
            onClick={() => tabClick("Rentals")}
          >
            Rentals
          </button>
        </div>
      )}

      {/* Properties */}
      <div className={styles.properties}>
        {showProperties.length > 0 ? (
          showProperties.map((property) => (
            <div className={styles.property} key={property.sys.id}>
              <p className={styles.paragraph}>
                {" "}
                {property.fields.gallery &&
                Array.isArray(property.fields.gallery) ? (
                  <ImageSlider
                    images={property.fields.gallery.map(
                      (galleryItem) => galleryItem.fields.file.url
                    )}
                  />
                ) : (
                  <p>No gallery available</p>
                )}
              </p>
              <div className={styles.propertyDetails}>
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/properties/${property.sys.id}`}
                >
                  <h3 className={styles.headline}>{property.fields.address}</h3>
                </Link>
                <p className={styles.paragraph}>
                  {property.fields.neighbourhood}
                </p>

                <p className={styles.paragraph}>
                  {property.fields.propertyType}
                </p>
                <hr className={styles.hr}></hr>
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/properties/${property.sys.id}`}
                >
                  <p className={styles.paragraphPrice}>
                    {property.fields.propertyCategory === "Rentals"
                      ? "Monthly Rent:"
                      : "Asking Price:"}{" "}
                    {property.fields.price}
                  </p>
                </Link>
                <p className={styles.paragraph}>
                  Beds: {property.fields.beds} | Baths: {property.fields.baths}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noContentMessage}>
            Sorry, no content matched your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Properties;
