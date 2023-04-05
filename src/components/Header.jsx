import React from "react";
import styles from './Header.module.css'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Header__nav}>
        <ul className={styles.Nav__list}>
          <li>
            <Link to='/' className={styles.Nav__link}>Accueil</Link> 
          </li>
          <li>
            <Link to='/galerie' className={styles.Nav__link}>Galerie</Link>  
          </li>
          <li>
            <Link to='/services' className={styles.Nav__link}>Services</Link> 
          </li>
          <li>
            <Link to='/contact' className={styles.Nav__link}>Contact</Link>
          </li>
        </ul>

        <ul className={styles.Nav__icons}>
          <li>
            <Link to='https://www.facebook.com'>
              <img src="../../assets/images/facebook.png" alt="facebook" className={styles.List__icon}></img>
            </Link>
          </li>
          <li>
            <Link to='https://www.instagram.com'>
              <img src="../../assets/images/instagram.png" alt="instagram" className={styles.List__icon}></img>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;