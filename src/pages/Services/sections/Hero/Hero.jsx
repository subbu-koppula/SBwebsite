import styles from "./Hero.module.css";
import Card from "./Card.jsx";
import { heroSection } from "../../content.js";
const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* <h1 className={styles.heading}>OUR SERVICES</h1> */}
      <div className={styles.heroContent}>
        <h1 className={styles.heading}>LEARN MORE ABOUT</h1>
        <h1 className={styles.heading} style={{ color: "#FE6500" }}>
          OUR SERVICES
        </h1>
        <p className={styles.text}>
         {heroSection.text} 
        </p>
        <button className={styles.ctaButton}>Contact Us!</button>
      </div>

      <div className={styles.heroCards}>
        <div className={styles.cardSet}>
          {heroSection.cards1.map((item, index) => (
            <Card title={item.title} key={index} link={item.link} />
          ))}
        </div>
        <div className={styles.cardSet}>
          {heroSection.cards2.map((item, index) => (
            <Card title={item.title} key={index} link={item.link}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
