import styles from './Hero.module.css';
const Card = ({title, link}) => {
  return (
    <div className={styles.card}>
        <h3 style={{textAlign: 'center'}}>{title}</h3>
        <button className={styles.cardButton}>Read More</button>
    </div>
  )
}

export default Card