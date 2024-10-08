import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo';
import Navigation from './Navigation';
import UserSection from './UserSection';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <Navigation />
        <UserSection />
      </div>
    </header>
  );
}

export default Header;