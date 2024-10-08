import React from 'react'
import styles from './Books.module.css';

const BookItem = ({imgSrc, title, desc}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
        <img className={styles.image} src={imgSrc}></img>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}><h3 className={styles.bookTitle}>{title}</h3>
        <p className={styles.bookDesc}>{desc}</p>
        </div>
    </div>
  )
}

export default BookItem