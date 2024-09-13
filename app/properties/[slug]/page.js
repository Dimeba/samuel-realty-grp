//styles
import styles from "./page.module.scss";
import Link from "next/link";

//contentful
import { getEntries, getEntry } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

//component
import ImageSlider from "@/components/ImageSlider";

const properties = await getEntries("listings");

export async function generateStaticParams() {
  return properties.items.map((item) => ({
    slug: item.sys.id,
  }));
}

export default async function Property({ params }) {
  const { slug } = params;
  const property = await getEntry(slug);

  const activeTab = "Sales";
  const tabLink =
    activeTab === "Rentals" ? "/listings/rentals" : "/listings/sales";
  return (
    <main className={styles.main}>
      {/* Breadcrumb navigation */}
      <nav className={styles.breadcrumb}>
        <Link href={tabLink}>{activeTab}</Link>
        <span className={styles.separator}>&gt;</span>
        <strong>{property.fields.neighbourhood}</strong>
      </nav>
      {/* Header section */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headlineFirstLine}>
            <h1 className={styles.headline}>{property.fields.neighbourhood}</h1>
            <p className={styles.price}>
              Asking price: {property.fields.price}
            </p>
          </div>
          <h2 className={styles.subHeadline}>{property.fields.address}</h2>
        </div>
      </header>
      {/* Media Section  */}
      <div className={styles.media}>
        <div className={styles.slider}>
          {property.fields.gallery && Array.isArray(property.fields.gallery) ? (
            <ImageSlider
              images={property.fields.gallery.map(
                (galleryItem) => galleryItem.fields.file.url
              )}
            />
          ) : (
            <p>No gallery available</p>
          )}
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3375489434513!2d-73.94063118459436!3d40.68877697933467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25af0c3f5b773%3A0x8177e4a283c7b74d!2s750%20Lexington%20Ave%2C%20Brooklyn%2C%20NY%2011221%2C%20USA!5e0!3m2!1sen!2sin!4v1641209958312!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          />
        </div>
      </div>
      {/*  Key Details Section*/}
      <div>
        <h2 className={styles.headline}>Key Details</h2>
        <div className={styles.detailsGrid}>
          {property.fields.propertyType && (
            <div className={styles.detailItem}>
              <span className={styles.detailValue}>Ownership</span>
              <span className={styles.detailLabel}>
                {property.fields.propertyType}
              </span>
            </div>
          )}
          {property.fields.squareFeet && (
            <div className={styles.detailItem}>
              <span className={styles.detailValue}>Size</span>
              <span className={styles.detailLabel}>
                {property.fields.squareFeet}
              </span>
            </div>
          )}
          {property.fields.rooms && (
            <div className={styles.detailItem}>
              <span className={styles.detailValue}>Rooms</span>
              <span className={styles.detailLabel}>
                {" "}
                {property.fields.rooms}
              </span>
            </div>
          )}
          {property.fields.beds && (
            <div className={styles.detailItem}>
              <span className={styles.detailValue}>Beds</span>
              <span className={styles.detailLabel}>{property.fields.beds}</span>
            </div>
          )}
          {property.fields.baths && (
            <div className={styles.detailItem}>
              <span className={styles.detailValue}>Baths</span>
              <span className={styles.detailLabel}>
                {property.fields.baths}
              </span>
            </div>
          )}
          {property.fields.price && (
            <div className={styles.detailItem}>
              <span className={styles.detailValue}>Maintenance</span>
              <span className={styles.detailLabel}>
                {property.fields.price}
              </span>
            </div>
          )}
          {property.fields.taxes && (
            <div className={styles.detailItem}>
              <span className={styles.detailValue}>Real Estate Taxes</span>
              <span className={styles.detailLabel}>
                {property.fields.taxes}
              </span>
            </div>
          )}
        </div>
      </div>
      {/* Listing Description Section */}
      <h2 className={styles.headline}>Listing description</h2>
      <div className={styles.description}>
        {" "}
        {documentToReactComponents(property.fields.description)}
      </div>
      {/*  Amenities Section  */}
      {property.fields.amenities && property.fields.amenities.length > 0 && (
        <>
          <h2 className={styles.headline}>Amenities</h2>
          <div className={styles.detailsAmenities}>
            {property.fields.amenities.map((amenity, index) => (
              <div key={index} className={styles.amenitiesItem}>
                <span className={styles.amenitiesLabel}>{amenity}</span>
              </div>
            ))}
          </div>
        </>
      )}
      {/* Contact Section */}
      <h2 className={styles.headline}>Contact</h2>
      <div className={styles.contactInfo}>
        <div className={styles.agent}>
          <p className={styles.paragraph}>
            Contact our exclusive agents for more info:
          </p>
          <span>Sam Horowitz</span>
          <p>P:516.314.7788</p>
          <p>shorowitz@samuelrealtygrp.com</p>
        </div>
        {/* Signup form for updates */}
        <div className={styles.signUp}>
          <p className={styles.paragraph}>
            Sign up to get the latest updates on this listing.
          </p>
          <div className={styles.inputFields}>
            <input
              type="text"
              name="FullName"
              placeholder="Full name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            ></input>
          </div>
          <button type="submit">SIGN UP</button>
        </div>
      </div>
    </main>
  );
}
