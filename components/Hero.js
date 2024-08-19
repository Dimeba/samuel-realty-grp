import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className="headline">Real Estate Agency</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.nycButton}>New York City</button>
          <button className={styles.liButton}>Long Island</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
