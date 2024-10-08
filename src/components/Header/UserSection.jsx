import React from 'react';
import styles from './Header.module.css';
import menu from '../../assets/icon/menu.svg';
console.log(menu)
function UserSection() {
  return (
    <div className={styles.userSection}>
      <div className={styles.cartWrapper}>
        <div className={styles.cartCount}>0</div>
        <div className={styles.cartIcon}>
          <div className={styles.cartIconEmpty}></div>
          <div className={styles.cartIconFull}></div>
        </div>
      </div>
      <button>
        <img loading="lazy" src={menu} className={styles.userIcon} alt="User profile" />
      </button>
    </div>
  );
}

export default UserSection;