import React from "react";
import MainContainer from "./MainContainer";
import styles from './Main.module.css';
import HomeBtn from "./HomeBtn";
const Main = () => {
  return (
    <main className={styles.Main}>
      <MainContainer />
      <h2 className={styles.Main__title2}>Capturez le moment présent avant qu'il ne disparaisse</h2>
      <HomeBtn />
    </main>
  )
}

export default Main;