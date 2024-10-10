import React from "react";
import styles from "./Header.module.css";

function Navigation({ menuOpen, toggleMenu }) {
  const navItems = [
    { name: "Home", href: "#home", isActive: true },
    { name: "About us", href: "#about-us", isActive: false },
    { name: "Contact", href: "#contact-us", isActive: false },
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
        
          <a key={item.name}
          className={`${styles.navItem} ${
            item.isActive ? styles.activeNavItem : ""
          }`} href={item.href}>{item.name}</a>
        
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
