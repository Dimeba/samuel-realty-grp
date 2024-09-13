//styles
import styles from "./Hero.module.scss";
import Link from "next/link";

//components
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.headline} color="white">
          Real Estate Agency
        </h1>
        <div className={styles.buttonContainer}>
          <Link href="/listings/new-york">
            <Button
              className={styles.newyork}
              text="New York City"
              color="primary"
            />
          </Link>{" "}
          <Link href="/listings/long-island">
            <Button
              className={styles.longisland}
              text="Long Island"
              color="secondary"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
