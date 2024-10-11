import React from 'react';
import styles from './Services.module.css';

const Card = ({title, color, desc}) => {
  return (
    <div className={styles.cardContainer} style={{backgroundColor: color}}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <div className="ml-2 mr-2 mt-1 mb-1 border-b border-gray-300" />
        <p className={styles.cardDesc}>{desc}</p>
    </div>
  )
}

export default Card