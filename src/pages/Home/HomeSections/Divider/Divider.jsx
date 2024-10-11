import styles from './Divider.module.css';
import mentor from '../../../../assets/icon/mentor.svg';
import book from '../../../../assets/icon/publish.png';
import marketing from '../../../../assets/icon/marketing.png';
import coverDesign from '../../../../assets/icon/coverDesign.png';

const Divider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ backgroundColor: '#6D4599' }}>
        {/* <div className={styles.cardContainer}> */}
          <img className={styles.icon} src={mentor}></img>
          <h3 className={styles.title}>Mentorship</h3>
        {/* </div> */}
      </div>
      <div className={styles.card} style={{ backgroundColor: '#FFA264' }}>
        {/* <div className={styles.cardContainer}> */}
          <img className={styles.icon} src={book}></img>
          <h3 className={styles.title}>Publish</h3>
        {/* </div> */}
      </div>
      <div className={styles.card} style={{ backgroundColor: '#6D4599' }}>
        {/* <div className={styles.cardContainer}> */}
          <img className={styles.icon} src={marketing}></img>
          <h3 className={styles.title}>Marketing</h3>
        {/* </div> */}
      </div>
      <div className={styles.card} style={{ backgroundColor: '#FFA264' }}>
        {/* <div className={styles.cardContainer}> */}
          <img className={styles.icon} src={coverDesign}></img>
          <h3 className={styles.title}>Cover-Design</h3>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Divider