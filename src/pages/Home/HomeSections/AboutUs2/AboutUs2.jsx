import React from "react";
import styles from "./AboutUs2.module.css";

const AboutUs2 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100",
              marginBottom: '30px',
              maxWidth: '400px'
            }}
          >
            At{" "}
            <span style={{ color: "#FF9F9F", fontSize: "32px" }}>
              ScratchBook
            </span>
            , we take utmost care of the authors that approach us. Right from
            the idea formulating stage to becoming the best seller, we provide
            every kind of guidance and mentorship as and when required.
          </p>

          <p
            style={{
              fontSize: "20px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100",
              maxWidth: '400px'
            }}
          >
            Apart from that, we provide various services. In short, we help the
            authors to gain <span style={{color: '#FF9F9F', textDecoration: 'underline'}}>Quality</span>, <span style={{color: '#FF9F9F', textDecoration: 'underline'}}>Brand</span>, and <span style={{color: '#FF9F9F', textDecoration: 'underline'}}>Earnings.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
