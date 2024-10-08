import React from "react";
import styles from "./Footer.module.css";
import ContactInfo from "./ContactInfo";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";
import Logo from "../../assets/icon/Logo.png";

const Footer = () => {
  const exploreLinks = [
    { text: "About us", url: "#" },
    { text: "Sitemap", url: "#" },
    { text: "Bookmarks", url: "#" },
    { text: "Sign in/Join", url: "#" },
    { text: "Buy Now", url: "#", isButton: true },
  ];

  const policyLinks = [
    { text: "Return Policy", url: "#" },
    { text: "Terms Of Use", url: "#" },
    { text: "Security", url: "#" },
    { text: "Privacy", url: "#" },
  ];

  const categoryLinks = [
    { text: "AWARD WINNERS", url: "#" },
    { text: "BEST SELLERS", url: "#" },
    { text: "book", url: "#" },
    { text: "COMING SOON", url: "#" },
    { text: "latest_book", url: "#" },
    { text: "NEW RELEASES", url: "#" },
  ];

  return (
    <section className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          <div className={styles.logoColumn}>
            <div className={styles.logoWrapper}>
              <img
                src={Logo}
                alt="ScratchBook Logo"
                className={styles.logo}
              />
              <span className={styles.brandName}>ScratchBook</span>
            </div>
            <SocialLinks />
            <ContactInfo />
          </div>
          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Policy" links={policyLinks} />
          <FooterColumn title="Categories" links={categoryLinks} />
        </div>
      </div>

    </section>
  );
};

export default Footer;
