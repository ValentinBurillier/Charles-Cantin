import React from "react";
import styles from './MainServices.module.css'
const MainServices = (props) => {

  return (
    <main className={styles.Main}>
      <h2 className={styles.Main__title}>"{props.title}"</h2>
      <p className={styles.Main__description}>{props.description}</p>
      <p className={styles.Main__price}>{props.price}</p>
      <div className={styles.Main__container}>
        <button className={styles.Container__btn} id="1"></button>
        <button className={styles.Container__btn} id="2"></button>
        <button className={styles.Container__btn} id="3"></button>
        <button className={styles.Container__btn} id="4"></button>
        <button className={styles.Container__btn} id="5"></button>
        <button className={styles.Container__btn} id="6"></button>
      </div>
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
    </main>
  )
}

export default MainServices;