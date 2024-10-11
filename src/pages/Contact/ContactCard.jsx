import styles from './Contact.module.css';

const ContactCard = ({ icon, title, content }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon} alt={`${title} icon`} />
      <h1 className={styles.title} >{title}</h1>
      {Array.isArray(content) && content.length > 0 ? (
        content.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      ) : (
        <p>No information available</p>
      )}
    </div>
  );
};

export default ContactCard;

