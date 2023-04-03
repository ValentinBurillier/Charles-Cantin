import React from "react";
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Header__nav}>
        <ul className={styles.Nav__list}>
          <li>
            <a href="#" className={styles.Nav__link}>Accueil</a>  
          </li>
          <li>
            <a href="#" className={styles.Nav__link}>Galerie</a>  
          </li>
          <li>
            <a href="#" className={styles.Nav__link}>Services</a>  
          </li>
          <li>
            <a href="#" className={styles.Nav__link}>Contact</a>  
          </li>
        </ul>

        <ul className={styles.Nav__icons}>
          <li>
            <a href="">
              <img src="../../assets/images/facebook.png" alt="facebook" className={styles.List__icon}></img>
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../assets/images/instagram.png" alt="instagram" className={styles.List__icon}></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;