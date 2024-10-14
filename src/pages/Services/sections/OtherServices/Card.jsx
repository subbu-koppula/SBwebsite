import styles from "./OtherServices.module.css";
const Card = ({ title, textList, color }) => {
  return (
    <div className={`${styles.gridItem} ${styles[`color${color}`]}`}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.textList}>
        {textList.map((textItem, idx) => (
          <li key={idx}>{textItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
