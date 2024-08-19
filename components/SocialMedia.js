import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <section className={styles.social}>
      <div className={styles.heroText}>
        <h2> Live on Instagram</h2>
      </div>
      <div className={styles.iconButtons}></div>
      <div className={styles.instaButton}>
        <button className={styles.buttonIg}>Follow on Instagram</button>
      </div>
    </section>
  );
};

export default SocialMedia;
