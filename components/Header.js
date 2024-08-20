"use client";

//styles
import styles from "./Header.module.scss";
import { useState } from "react";
//components
import Link from "next/link";
/* import { Spin as Hamburger } from "hamburger-react";
 */
//menu items
//added submenu items - functionality
const menuItems = [
  {
    title: "ACTIVE LISTINGS",
    href: "#",
    submenu: [
      {
        title: "New York",
        href: "#",
      },
      { title: "Long Island", href: "#" },
    ],
  },
  {
    title: "PAST SALES",
    href: "#",
    submenu: [
      {
        title: "New York",
        href: "#",
      },
      { title: "Long Island", href: "#" },
    ],
  },
  { title: "OUR AGENTS", href: "#" },
  { title: "BLOG", href: "#" },
  { title: "CONTACT", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.testForResponsive}>
        {" "}
        {/* I have added this one div for three header elements, did CSS with flex */}
        <div className={styles.logo}></div>
        {/* Hamburger menu for mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <p>nn</p> {/* for test */}
        </div>
        {/* Desktop Navigation - first option */}
        <nav className={styles.nav}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.navItem}>
              <Link href={item.href} aria-label={`Link to ${item.title} page`}>
                {item.title}
              </Link>
              {item.submenu && (
                <div className={styles.dropdown}>
                  {item.submenu.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href}>
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
      </div>

      {/* Mobile navigation -second option */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.mobileMenuItem}>
              <Link href={item.href} onClick={toggleMenu}>
                {item.title}
              </Link>
              {item.submenu && (
                <div className={styles.mobileSubmenu}>
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      onClick={toggleMenu}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
