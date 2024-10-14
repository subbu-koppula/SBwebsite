import styles from './BookPublishing.module.css';
import Card from './Card';
import { bookPublishingSection } from '../../content';

const BookPublishing = () => {
  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        {bookPublishingSection.card.map((item, index) => (
          <Card key={index} title={item}/>
        ))}
      </div>
    </section>
  )
}

export default BookPublishing