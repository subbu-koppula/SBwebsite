import styles from "./BookPublishing.module.css";
const Card = ({ title }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
