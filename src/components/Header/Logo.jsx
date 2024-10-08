import React from 'react';
import Logoicon from '../../assets/icon/Logo2.png'
import styles from './Header.module.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <img loading="lazy" src={Logoicon} className={styles.logoImage} alt="ScratchBook logo" />
      <div className={styles.logoText}>ScratchBook</div>
    </div>
  );
}

export default Logo;