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
  bgBody.style.backgroundImage = "url('http://localhost:1337/uploads/service1_mobile_6c0f0e7e97.jpg')"

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