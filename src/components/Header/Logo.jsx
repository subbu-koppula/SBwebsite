import React from "react";
import Logoicon from "../../assets/icon/Logo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <div className={styles.logo}>
        <img
          loading="lazy"
          src={Logoicon}
          className={styles.logoImage}
          alt="ScratchBook logo"
        />
        <div className={styles.logoText}>ScratchBook</div>
      </div>
    </Link>
  );
}

export default Logo;
