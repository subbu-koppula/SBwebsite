import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id='home' className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>ScratchBook</h1>
          <h2 className={styles.subTitle}>Publications</h2>
          <p className={styles.description}>
            We At ScratchBook Believe That Every Person On Earth Is A Writer And Deserves To Give A Chance Once In A Lifetime. If You Believe Too, Come To Us. We Travel You Through The Garden Of Opportunities Where You Can Choose Your Niche And Path To Winning.
          </p>
          <a href="#read-more" className={styles.ctaButton} role="button" tabIndex="0">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;