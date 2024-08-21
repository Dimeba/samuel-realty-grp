"use client";

//hooks
import { useState } from "react";

//styles
import styles from "./Header.module.scss";

//components
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";

/* import { usePathname } from "next/navigation"; */

//menu items
const menuItems = [
  {
    title: "ACTIVE LISTINGS",
    href: "/activelistings",
    submenu: [
      { title: "New York", href: "/newyork" },
      { title: "Long Island", href: "/longisland" },
    ],
  },
  {
    title: "PAST SALES",
    href: "#",
    submenu: [
      { title: "New York", href: "/newyork" },
      { title: "Long Island", href: "/longisland" },
    ],
  },
  { title: "OUR AGENTS", href: "/ouragents" },
  { title: "BLOG", href: "/blog" },
  { title: "CONTACT", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.container}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <div className={styles.logo}></div>

        {/* Desktop Navigation */}
        <nav className={`${styles.nav} ${!isMenuOpen && styles.hidden}`}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <Link
                href={item.href}
                aria-label={`Link to ${item.title} page`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
              {/* Submenu */}
              {item.submenu && (
                <div className={styles.dropdown}>
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={styles.dropdownLink}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact */}
        <div className={styles.contact}>
          <p>Call Us</p>
          <p>516.314.7788</p>
        </div>

        {/* Hamburger menu for mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
