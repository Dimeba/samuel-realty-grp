"use client";

import styles from "./PropertiesTest.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

// Contentful
import { getEntries } from "@/lib/contentful";

const Properties = () => {
  const [properties, setProperties] = useState([]); //ovdje cemo smjestiti sve podatke o nekretninama, prvo je prazan niz
  const [activeTab, setActiveTab] = useState("Sales"); //nju ubacujemo da bi se prvo prikazala Sales kartica

  useEffect(() => {
    //preko useEffecta uzimam podatke sa Contenfula
    const propertiesData = async () => {
      //asinhrona funckija, povlaci podatke u pozadini
      const entries = await getEntries("listings");
      setProperties(entries.items);
    };
    propertiesData();
  }, []);

  const tabClick = (tab) => {
    //za promjenu aktivne kartice
    setActiveTab(tab);
  };

  //kreiram novu listu properties, prolazi kroz sve nekretnine i filtriram one koji odgovaraju aktivnoj kartici
  const showProperties = properties.filter(
    (item) => item.fields.propertyCategory === activeTab
  );

  return (
    <div className={styles.mainContainer}>
      {/* Tab Navigation */}
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

      {/* Properties */}
      <div className={styles.properties}>
        {showProperties.map((property) => (
          <div className={styles.property} key={property.sys.id}>
            <p className={styles.paragraph}>
              {property.fields.gallery &&
              Array.isArray(property.fields.gallery) ? ( //provjerava da li postoji property.fields.gallery i da li je to niz
                property.fields.gallery.map(
                  (
                    galleryItem,
                    index //prikazivanje svih slika
                  ) => (
                    <div key={index}>
                      <img
                        className={styles.galleryImage}
                        src={galleryItem.fields.file.url}
                        alt={`Gallery Image ${index}`}
                      />
                    </div>
                  )
                )
              ) : (
                <p>No gallery available</p>
              )}
            </p>
            <div className={styles.propertyDetails}>
              <Link href={`/properties/${property.sys.id}`}>
                <h3 className={styles.headline}>{property.fields.address}</h3>
              </Link>
              <p className={styles.paragraph}>
                {property.fields.neighbourhood}
              </p>

              <p className={styles.paragraph}>{property.fields.propertyType}</p>
              <hr className={styles.hr}></hr>
              <p className={styles.paragraph}>
                <strong>
                  {property.fields.propertyType === "Rental"
                    ? "Monthly Rent:"
                    : "Asking Price:"}{" "}
                  {property.fields.price}
                </strong>
              </p>
              <p className={styles.paragraph}>
                Beds: {property.fields.beds} | Baths: {property.fields.baths}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
