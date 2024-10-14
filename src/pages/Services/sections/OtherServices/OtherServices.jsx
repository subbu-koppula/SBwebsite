import styles from './OtherServices.module.css';
import {otherServices} from '../../content';
import Card from './Card';

const OtherServices = () => {
  return (
    <section id="OtherServices" className={styles.gridContainer}>
      {otherServices.map((item, index) => (
        <Card key = {index} title = {item.title} textList = {item.text} color = {index} />
      ))}
    </section>
  )
}

export default OtherServices