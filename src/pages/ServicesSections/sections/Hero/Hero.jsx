import styles from "./Hero.module.css";
import Card from "./Card.jsx";
const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* <h1 className={styles.heading}>OUR SERVICES</h1> */}
      <div className={styles.heroContent}>
        <h1 className={styles.heading}>LEARN MORE ABOUT</h1>
        <h1 className={styles.heading} style={{ color: "#FE6500" }}>
          OUR SERVICES
        </h1>
        <p className={styles.text}>
          We at ScratchBook believe that every person on earth is a writer and
          deserves to give him a chance once in a lifetime. If you believe too,
          come to us. We travel you through the garden of opportunities where
          you can choose your own niche and path to winning.
        </p>
        <button className={styles.ctaButton}>Contact Us!</button>

      </div>

      <div className={styles.heroCards}>
        <div className={styles.cardSet}>
          <Card title="Workshops and Mentorships" />
          <Card title="Workshops and Mentorships" />
          <Card title="Workshops and Mentorships" />
        </div>
        <div className={styles.cardSet}>
          <Card title="Workshops and Mentorships" />
          <Card title="Workshops and Mentorships" />
          <Card title="Workshops and Mentorships" />
        </div>
      </div>

    </div>
  );
};

export default Hero;
