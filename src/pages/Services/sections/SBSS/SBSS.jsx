import styles from './SBSS.module.css';
import {sbssContent} from '../../content';
import image from '../../../../assets/images/SBSS.webp';
const SBSS = () => {
  return (
    <section id="SBSS" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{sbssContent.title}</h1>
        <p className={styles.text}>{sbssContent.text} </p>
      </div>
      <img src = {image} className={styles.image} />
    </section>
  )
}

export default SBSS