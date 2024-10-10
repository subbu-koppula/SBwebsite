import React, { useState , useEffect} from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserSection from "./UserSection";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log("initial loading set", menuOpen);
  const toggleMenu = () => {
    console.log(menuOpen);
    setMenuOpen((prevState) => !prevState);
  };

  //below code from chatgpt, I don't know what it does either...
    useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(`.${styles.navigation}`)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${
        menuOpen ? styles.headerNoBlur : styles.headerBlur
      }`}
    >
      <div className={styles.headerContent}>
        <Logo />
        <Navigation toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <UserSection toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;
