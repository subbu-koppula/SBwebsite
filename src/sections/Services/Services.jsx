import React from "react";
import styles from "./Services.module.css";
import Card from "./Card";

const AboutUs1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={`${styles.flexColumn} flex flex-col lg:w-5/12 md:w-7/12 w-full gap-1.5`}>
          <h1 className={styles.title}>Bringing Life to Your Book. </h1>
          <h3 className={styles.subTitle}>Comprehensive Publishing Services</h3>
          <p className={styles.desc}>
            We offer everything you need to turn your manuscript into a
            masterpiece—professional editing, custom cover designs, and
            personalized branding. At ScratchBook, we ensure that your book
            stands out in both content and appearance, providing full support
            from draft to publication.
          </p>
        <div className={styles.flexContainer}>
          <Card title='20+' color='#cea81b' desc='Books Published'/>
          <Card title='500+' color='#CB884E' desc='Authors Served'/>
          <Card title='100+' color='#AA9E37' desc='Anthologies'/>
          {/* <Card title='59K' color='#73AB6D' desc='ACTIVE READERS'/> */}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
