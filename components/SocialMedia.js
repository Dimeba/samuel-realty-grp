//styles
import styles from "./SocialMedia.module.scss";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/images/apartment.jpg",
    alt: "Apartment",
    description: "An off-market special deal in Williamsburg. Sold M..",
    link: "https://www.instagram.com",
  },

  {
    src: "/images/house.jpg",
    alt: "House",
    description: "Long Island #3. This legal two-family house in Nor..",
    link: "https://www.instagram.com",
  },

  {
    src: "/images/info.jpg",
    alt: "Informations",
    description: "50% growth in both $'s sold and pending and # of...",
    link: "https://www.instagram.com",
  },
];

const showImage = ({ src, alt, description, link }, index) => (
  <div key={index} className={styles.imageContainer}>
    <Link href={link} target="_blank" className={styles.imageLink}>
      <Image
        src={src}
        alt={alt}
        width={360}
        height={360}
        className={styles.image}
      />
    </Link>
    <p className={styles.description}>{description}</p>
  </div>
);

const SocialMedia = () => {
  return (
    <section className={styles.social}>
      <div className={styles.socialText}>
        <h2> Live On Instagram</h2>
      </div>
      <div className={styles.instaLinks}>{images.map(showImage)}</div>
      <div className={styles.instaButton}>
        <a href="https://www.instagram.com" target="_blank">
          <button className={styles.buttonIg}>
            <FaInstagram className={styles.faInstagram} />
            Follow on Instagram
          </button>
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
