import React from "react";
import styles from "./SocialLinks.module.css";
import Instagram from "../../assets/icon/logo-instagram.svg";
import Twitter from "../../assets/icon/logo-twitter.svg";
import Linkedin from "../../assets/icon/logo-linkedin.svg";
import Facebook from "../../assets/icon/logo-facebook.svg";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="#" className={styles.socialLink} aria-label="Facebook">
        <img src={Facebook} className={styles.icon} />
      </a>
      <a href="#" className={styles.socialLink} aria-label="Twitter">
        <img src={Twitter} className={styles.icon} />
      </a>
      <a href="#" className={styles.socialLink} aria-label="Instagram">
        <img src={Instagram} className={styles.icon} />
      </a>
      <a href="#" className={styles.socialLink} aria-label="LInkedin">
        <img src={Linkedin} className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialLinks;
