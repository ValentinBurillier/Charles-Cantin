import React from "react";
import styles from './MainServices.module.css'
const MainServices = (props) => {

  return (
    <main className={styles.Main}>
      <h2 className={styles.Main__title}>"{props.title}"</h2>
      <p className={styles.Main__description}>{props.description}</p>
      <p className={styles.Main__price}>{props.price}€</p>
      <div className={styles.Main__container}>
        <button className={styles.Container__btn} id={styles.Btn1} data-nb="0"></button>
        <button className={styles.Container__btn} id={styles.Btn2} data-nb="1"></button>
        <button className={styles.Container__btn} id={styles.Btn3} data-nb="2"></button>
        <button className={styles.Container__btn} id={styles.Btn4} data-nb="3"></button>
        <button className={styles.Container__btn} id={styles.Btn5} data-nb="4"></button>
        <button className={styles.Container__btn} id={styles.Btn6} data-nb="5"></button>
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