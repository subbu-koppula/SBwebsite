import React from "react";
import styles from "./AboutUs1.module.css";
import author from "../../assets/icon/author.png";
import support from "../../assets/icon/support.png";
import community from "../../assets/icon/community.png";
import writers from "../../assets/icon/writers.png";

const AboutUs1 = () => {
  return (
    <section className={styles.hero}>
        <h1 style={{color : 'black', fontSize: '40px', fontFamily: "timesNewRoman"}}>Welcome to ScratchBook</h1>
        <p style={{color: '#F48649'}}>Every writer deserves a chance!</p>
      <div className={styles.heroContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.gridBlock}>
            <img src={writers} alt="Image 1" />
            <h3>Empowering Writers</h3>
            <p>We believe everyone has a story. ScratchBook offers a platform for aspiring authors to bring their ideas to life, guiding them every step of the way.</p>
          </div>
          <div className={styles.gridBlock}>
            <img src={support} alt="Image 2" />
            <h3>Complete Support</h3>
            <p>From editing to branding, we provide all the services an author needs to succeed. Our tailored approach ensures your work reaches its full potential.</p>
          </div>
          <div className={styles.gridBlock}>
            <img src={community} alt="Image 3" />
            <h3>Community and Growth</h3>
            <p>Be part of a growing network of writers. With events, competitions, and opportunities, ScratchBook helps you grow and thrive creatively.</p>
          </div>
          <div className={styles.gridBlock}>
            <img src={author} alt="Image 4" />
            <h3>Authors First</h3>
            <p>At ScratchBook, you’re in control. We focus on helping you maintain creative freedom while achieving quality and recognition in the literary world.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
