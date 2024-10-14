import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for URL tracking
import styles from "./Header.module.css";

function Navigation({ menuOpen, toggleMenu }) {
  const location = useLocation(); // Hook to get the current URL location
  const [activeNavItem, setActiveNavItem] = useState(location.pathname); // Initialize with the current URL

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  // Function to handle click and set active item
  const handleNavItemClick = (path) => {
    setActiveNavItem(path); // Update the active item when clicked
    if (menuOpen) toggleMenu(); // Close the menu if it's open
  };

  return (
    <nav
      className={`${styles.navigation} ${
        menuOpen ? styles.menuOpen : styles.menuClose
      }`}
    >
      <button className={styles.closeButton} onClick={toggleMenu}>
        &times;
      </button>

      {navItems.map((item) => (
        <Link
          key={item.name}
          className={`${styles.navItem} ${
            activeNavItem === item.to ? styles.activeNavItem : ""
          }`}
          to={item.to} // Use 'to' for Link
          onClick={() => handleNavItemClick(item.to)} // Set active item on click
        >
          {item.name}
        </Link>
      ))}

      <a
        href="https://www.amazon.in/l/27943762031?me=A24O4F91D2LFEP&tag=ShopReferral_298fbf66-022f-4106-bec5-70a3a95ff878&ref=sf_seller_app_share_new_ls_srb"
        target="_blank"
        className={styles.buyButton}
      >
        BUY NOW
      </a>
    </nav>
  );
}

export default Navigation;
