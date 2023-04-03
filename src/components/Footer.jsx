import React from "react";
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        <ul className={styles.Container__politiques}>
          <li>
            <p>Mentions légales</p>
          </li>
          <li>
            <p>CGV</p>
          </li>
        </ul>

        <ul className={styles.Container__icons}>
          <li>
            <a href="">
              <img src="../../assets/images/facebook.png" alt="facebook" className={styles.Footer__icon}></img>
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../assets/images/instagram.png" alt="instagram" className={styles.Footer__icon}></img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;