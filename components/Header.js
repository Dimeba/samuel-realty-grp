"use client";

//hooks
import { useState } from "react";
import { usePathname } from "next/navigation";

//styles
import styles from "./Header.module.scss";

//components
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";

//menu items
const menuItems = [
  {
    title: "ACTIVE LISTINGS",
    href: "/listings/new-york",
    submenu: [
      { title: "New York", href: "/listings/new-york" },
      { title: "Long Island", href: "/listings/long-island" },
    ],
  },
  {
    title: "PAST SALES",
    href: "/listings/new-york",
    submenu: [
      { title: "New York", href: "/listings/new-york" },
      { title: "Long Island", href: "/listings/long-island" },
    ],
  },
  { title: "OUR AGENTS", href: "/agents" },
  { title: "BLOG", href: "/blog" },
  { title: "CONTACT", href: "/contact" },
];

const Header = ({ onLocationChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLocationClick = (location) => {
    onLocationChange(location);
  };
  const isNotHomePage = pathname !== "/"; //adding to recognize either is home page or not

  return (
    <header
      className={`${styles.container} ${
        isNotHomePage ? styles.withBottomLine : ""
      }`}
    >
      <div className={styles.headerContent}>
        {/* Logo */}
        <Link
          className={styles.logo}
          href="/"
          aria-label="Link to Homepage"
        ></Link>

        {/* Desktop Navigation */}
        <nav className={`${styles.nav} ${!isMenuOpen && styles.hidden}`}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <Link
                href={item.href}
                aria-label={`Link to ${item.title} page`}
                onClick={() => handleLocationClick(item.title)}
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
                      onClick={() => handleLocationClick(subItem.title)}
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
