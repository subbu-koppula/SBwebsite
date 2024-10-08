import React from 'react';
import styles from './Header.module.css';

function Navigation() {
  const navItems = [
    { name: 'Home', href: '#home', isActive: true },
    { name: 'About us', href: '#about-us', isActive: false },
    { name: 'Contact',href: '#contact-us', isActive: false },
  ];

  return (
    <nav className={styles.navigation}>
      {navItems.map((item) => (
        <div key={item.name} className={`${styles.navItem} ${item.isActive ? styles.activeNavItem : ''}`}>
          <a href={item.href}>
            {item.name}
          </a>
        </div>
      ))}
      <button className={styles.buyButton}>BUY NOW</button>
    </nav>
  );
}

export default Navigation;