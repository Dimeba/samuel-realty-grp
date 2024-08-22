//styles
import styles from "./SocialMedia.module.scss";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className={styles.social}>
      <div className={styles.heroText}>
        <h2> Live on Instagram</h2>
      </div>
      <div className={styles.instaLinks}></div>
      <div className={styles.instaButton}>
        <button className={styles.buttonIg}>
          <FaInstagram className={styles.faInstagram} />
          Follow on Instagram
        </button>
      </div>
    </section>
  );
};

export default SocialMedia;
