import React from "react";
import styles from "./Books.module.css";
import BookItem from "./BookItem";
import Book1 from "../../assets/images/Book1.jpg";
import Book2 from "../../assets/images/Book2.jpg";
import Book3 from "../../assets/images/Book3.jpg";
const Books = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Discover Your Next Book</h1>
      <p className={styles.title}>These are some of our author's works.</p>
      <div className={styles.BooksContainer} >
        <BookItem
          title="Lorem ipsum"
          imgSrc={Book1}
          desc="A temporary desc for now"
        />
        <BookItem
          title="Lorem ipsum"
          imgSrc={Book2}
          desc="A temporary desc for now"
        />
        <BookItem
          title="Lorem ipsum"
          imgSrc={Book3}
          desc="A temporary desc for now"
        />
        <BookItem
          title="Lorem ipsum"
          imgSrc={Book1}
          desc="A temporary desc for now"
        />
        <BookItem
          title="Lorem ipsum"
          imgSrc={Book2}
          desc="A temporary desc for now"
        />
      </div>
      <button className={styles.ctaButton}>View More</button>
    </div>
  );
};

export default Books;
