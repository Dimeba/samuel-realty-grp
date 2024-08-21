//styles

import styles from "./Hero.module.scss";

//components

import Button from "./Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.headline} color="white">
          Real Estate Agencyy
        </h1>
        <div className={styles.buttonContainer}>
          <Button text="New York City" color="primary" />
          <Button text="Long Island" color="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
