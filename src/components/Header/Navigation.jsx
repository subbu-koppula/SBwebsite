import React from "react";
import { Link } from "react-router-dom"; // Import Link
import styles from "./Header.module.css";

function Navigation({ menuOpen, toggleMenu }) {
  const navItems = [
    { name: "Home", to: "/", isActive: true },
    { name: "About us", to: "/about", isActive: false },
    { name: "Contact", to: "/contact", isActive: false },
    { name: "Services", to: "/services", isActive: false },
  ];

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
            item.isActive ? styles.activeNavItem : ""
          }`}
          to={item.to} // Use 'to' for Link
          onClick={menuOpen ? toggleMenu : undefined} 
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
