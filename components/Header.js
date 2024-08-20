//styles

import styles from "./Header.module.scss";

//components
import Link from "next/link";

//menu items

const menuItems = [
  { title: "ACTIVE LISTINGS", href: "#" },
  { title: "PAST SALES", href: "#" },
  { title: "OUR AGENTS", href: "#" },
  { title: "BLOG", href: "#" },
  { title: "CONTACT", href: "#" },
];

const Header = () => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}></div>

      {/* Navigation */}

      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            aria-label={`Link to ${item.title} page`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {/* Contact */}
      <div className={styles.contact}>
        <p>Call Us</p>
        <p>516.314.7788</p>
      </div>
    </div>
  );
};

export default Header;
