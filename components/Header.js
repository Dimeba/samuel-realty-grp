import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <nav className={styles.nav}>
        <a href="#">ACTIVE LISTINGS</a>
        <a href="#">PAST SALES</a>
        <a href="#">OUR AGENTS</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
      </nav>
      <div className={styles.contact}>
        <p>Call Us</p>
        <p>516.314.7788</p>
      </div>
    </div>
  );
};

export default Header;
