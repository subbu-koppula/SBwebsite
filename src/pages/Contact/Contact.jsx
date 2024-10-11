import mail from "../../assets/icon/mail.svg";
import location from "../../assets/icon/location.svg";
import call from "../../assets/icon/call.svg";
import ContactCard from "./ContactCard";
import styles from "./Contact.module.css";

const Contact = () => {
  const info = {
    email: [
      "scratchbookpublications@gmail.com",
      "support@scratchbookpublications.in",
    ],
    address: [
      "ScratchBook Publications, C/O Evince Publication, Second floor, Shivam Complex, KONI, CHHATTISGARH, 495009",
    ],
    phNumber: ["+918522061246"],
  };

  return (
    <>
      <h1 className={styles.heading}>Contact <span style={{color: '#ff6600'}}>us</span></h1>
      <div className={styles.page}>
        <ContactCard icon={mail} title="EMAIL" content={info.email} />
        <ContactCard icon={location} title="ADDRESS" content={info.address} />
        <ContactCard icon={call} title="PHONE" content={info.phNumber} />
      </div>
    </>
  );
};

export default Contact;
