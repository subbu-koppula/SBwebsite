import styles from "./Hero.module.css";
const Card = ({ title, link }) => {
  return (
    <div className={styles.card}>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <button className={styles.cardButton}><a href={link}>Read More</a></button>
    </div>
  );
};

export default Card;
