import React from 'react';
import styles from './FooterColumn.module.css';

const FooterColumn = ({ title, links }) => {
  return (
    <div className={styles.footerColumn}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            {link.isButton ? (
              <a href={link.url} className={`${styles.link} ${styles.buttonLink}`}>
                {link.text}
              </a>
            ) : (
              <a href={link.url} className={styles.link}>
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;