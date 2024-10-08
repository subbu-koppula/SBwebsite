import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.contactTitle}>Contact Us</h3>
      <address className={styles.addressWrapper}>
        <div className={styles.addressLine}>
          <span className={styles.icon} aria-hidden="true"></span>
          <span>#1 Tavern Street, Woodbrook</span>
        </div>
        <div className={styles.phoneLine}>
          <span className={styles.icon} aria-hidden="true"></span>
          <a href="tel:6468289650" className={styles.phoneNumber}>646-828-9650</a>
        </div>
        <div className={styles.emailLine}>
          <span className={styles.icon} aria-hidden="true"></span>
          <a href="mailto:info@digital.com" className={styles.emailAddress}>info@digital.com</a>
        </div>
      </address>
    </div>
  );
};

export default ContactInfo;