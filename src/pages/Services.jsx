import React from "react";
import Header from "../components/Header";
import MainServices from "../components/MainServices";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import styles from './Services.module.css'

const Services = () => {
  const [data, setData] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    fetch('http://localhost:1337/api/services-p/1?populate=*')
      .then(response => response.json())
      .then(json => setData(json.data.attributes))
      .catch(error => console.log(error));
  }, [])

  // const urlImage = data.image.data.attributes.url;

    const bgBody = document.getElementsByTagName('body')[0];
    
  // DISPLAY GOOD IMAGE RESOLUTION UNDER THE SIZE SCREEN
    function imgTest() {

      let mediaBase = window.matchMedia("(max-width: 799px)");
      if (mediaBase.matches) {
        bgBody.style.backgroundImage = "url('http://localhost:1337/uploads/service1_mobile_6c0f0e7e97.jpg')";
      }

      let media800 = window.matchMedia("(min-width: 800px) and (min-height: 568px");
      if (media800.matches) {
        bgBody.style.backgroundImage = "url('http://localhost:1337/uploads/service1_m_6aad76b042.jpg')";
      }

      let media1200 = window.matchMedia("(min-width: 1200px) and (min-height: 568px");
      if (media1200.matches) {
        bgBody.style.backgroundImage = "url('http://localhost:1337/uploads/service1_l_72e03f71a9.jpg')";
      }
    }

    window.addEventListener('resize', imgTest);
    imgTest();

  return (
    <>
      <Header />
      <MainServices 
        title = {`${data.title}`}
        description = {`${data.description}`}
        price = {`${data.price}€`}
      />
    </>
  )
}

export default Services;