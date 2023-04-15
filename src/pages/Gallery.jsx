import React from "react";
import styles from "./Gallery.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainGallery from "../components/MainGallery";

const Gallery = () => {
  return (
    <div className={styles.Bg__opacity}>
      <Header />
      <MainGallery />
      <Footer />
    </div>
  )
}

export default Gallery;