import styles from "./Workshop.module.css";
const Card = ({ title, text }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
