import styles from "./Workshop.module.css";
import Card from "./Card";
// import Content from "./content.json";
import {workshopSection} from '../../content';
const Content = workshopSection;
const Workshop = () => {
  return (
    <section id="Workshop" className={styles.container}>
      <div  className={styles.textContent}>
        <h1 className={styles.heading}>{Content.heading}</h1>
        <p className={styles.text}>{Content.text}</p>
      </div>
      <div className={styles.cardSet}>
        {Content.cards.map((item, index) => (
          <Card key={index} title={item.title} text={item.text} />
        ))}
      </div>
      <button className={styles.ctaButton}>Learn More</button>
    </section>
  );
};

export default Workshop;
