import styles from "./PropertiesTest.module.scss";
import Link from "next/link";

// Contentful
import { getEntries } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; //added in contentful Rich text field, got an error in the meantime

const Properties = async () => {
  const propertyDetails = [];

  const properties = await getEntries("listings");
  console.log(properties);
  console.log(properties.items[0].fields.address);

  /*  for (let i = 0; i < properties.items.length; i++) {
    let property = properties.items[i];

    let propertyDetail = (
      <div className={styles.property} key={i}>
        <h3 className={styles.headline}>{`${property.fields.address}`}</h3>
        <p className={styles.paragraph}>{`${property.fields.neighbourhood}`}</p>
        <p className={styles.paragraph}>{`${property.fields.propertyType}`}</p>

        <p className={styles.paragraph}>
          <strong>
            {property.fields.propertyType === "Rental"
              ? "Monthly Rent:"
              : "Asking Price:"}{" "}
            {property.fields.price}
          </strong>
        </p>
      </div>
    );
    propertyDetails[i] = propertyDetail;
  } */

  return (
    <div className={styles.mainContainer}>
      <div className={styles.properties}>
        {properties.items
          .filter((item) => item.fields.propertyCategory == "Rentals")
          .map((property) => (
            <div className={styles.property} key={property.sys.id}>
              <Link href={`/properties/${property.sys.id}`}>
                {" "}
                <h3
                  className={styles.headline}
                >{`${property.fields.address}`}</h3>
              </Link>
              <p
                className={styles.paragraph}
              >{`${property.fields.neighbourhood}`}</p>
              <p className={styles.paragraph}>
                {property.fields.gallery &&
                Array.isArray(property.fields.gallery) ? (
                  property.fields.gallery.map((galleryItem, index) => (
                    <div key={index}>
                      <img
                        className={styles.galleryImage}
                        src={galleryItem.fields.file.url}
                        alt={`Gallery Image ${index}`}
                      />
                    </div>
                  ))
                ) : (
                  <p>No gallery available</p>
                )}
              </p>

              <p
                className={styles.paragraph}
              >{`${property.fields.propertyType}`}</p>

              <p className={styles.paragraph}>
                <strong>
                  {property.fields.propertyType === "Rental"
                    ? "Monthly Rent:"
                    : "Asking Price:"}{" "}
                  {property.fields.price}
                </strong>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Properties;
