import React from "react";
import styles from './Testimonials.module.css';
import testimonial from '../../../../assets/images/Testimonialimage1.webp';

const TestimonialSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h2 className={styles.title}>Testimonial</h2>
            <p className={styles.subtitle}>Hear from our clients</p>
            <div className={styles.authorInfo}>
              <img 
                loading="lazy" 
                src={testimonial} 
                className={styles.authorImage} 
                alt="Akanksha Kulshrestha"
              />
              <h3 className={styles.authorName}>Akanksha Kulshrestha</h3>
            </div>
          </header>
        </div>
        <div className={styles.testimonialContent}>
          <h4 className={styles.testimonialHeading}>Your team is really very supportive!</h4>
          <p className={styles.testimonialText}>
            I worked with your publication and I really enjoyed working with you. You help others with such a helpful nature that no matter who the person is, he would definitely want to work with you and I myself want to get a chance again in life and work with you. I find your team very supportive. The way your team encourages and helps people, I like it a lot. I have seen many publications. They keep misleading new authors. But you and your team guide very well. I would definitely like to work with you in the future as well and would tell new authors to definitely work with SBP once, they will not be disappointed. Thanks SBP for publishing my dream book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;