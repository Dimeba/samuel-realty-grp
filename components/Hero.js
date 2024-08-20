//styles

import styles from "./Hero.module.scss";

//components

import Button from "./Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className="headline">Real Estate Agency</h1>
        <div className={styles.buttonContainer}>
          <Button text="New York City" buttonClass={styles.nycButton}></Button>
          <Button text="Long Island" buttoonClass={styles.liButton}></Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
