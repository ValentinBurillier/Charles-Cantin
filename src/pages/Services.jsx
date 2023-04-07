import React from "react";
import Header from "../components/Header";
import MainServices from "../components/MainServices";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import styles from './Services.module.css'

const Services = () => {
  const [data, setData] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('')
  const [imgSm, setImgSm] = useState('');
  const [imgM, setImgM] = useState('');
  const [imgL, setImgL] = useState('');
  const bgBody = document.getElementsByTagName('body')[0];

  
  /* GET BDD  ALL DATA (VALIDE) STOCK IN CONST DATA */
  useEffect(() => {
    fetch('http://localhost:1337/api/services-p?populate=*')
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(error => console.log(error));
  }, [])

  /* EVENT ON CLICK BUTTON TO CHANGE SERVICE AND GET DATA*/
  const allBtn = [...document.querySelectorAll('button')];
  allBtn.forEach(element => element.addEventListener('click', () => {
    var btnDataSet = element.dataset.nb;
    getDataService(data, btnDataSet)
  }))
  window.addEventListener('load', () => {
    allBtn.forEach(function(element) {
    var btnDataSet = "0";
    console.log(btnDataSet);
    getDataService(data, btnDataSet)
    })
  
  })

  /* FUNCTION GET DATA OF THE SERVICE */
  function getDataService(data, btnDataSet) {
    setTitle(data[btnDataSet].attributes.title);
    setDescription(data[btnDataSet].attributes.description);
    
    if(data[btnDataSet].attributes.price > 0) {
      setPrice(data[btnDataSet].attributes.price);
    } else {
      setPrice('Sur mesure');
    }

    setImgSm(data[btnDataSet].attributes.image.data[2].attributes.url)
    setImgM(data[btnDataSet].attributes.image.data[1].attributes.url)
    setImgL(data[btnDataSet].attributes.image.data[0].attributes.url)
    imgTest(btnDataSet);
  }
  // const urlImage = data.image.data.attributes.url;

  // DISPLAY GOOD IMAGE RESOLUTION UNDER THE SIZE SCREEN
    function imgTest(btnDataSet) {
      let mediaBase = window.matchMedia("(max-width: 799px)");
      if (mediaBase.matches) {
        let urlImgSm = `url('http://localhost:1337${imgSm}')`; // GOOD URL
        bgBody.style.backgroundImage = urlImgSm; // GOOT SYNTAXE BUT NOT DISPLAY
        bgButtonClick(btnDataSet);
      }

      let media800 = window.matchMedia("(min-width: 800px) and (min-height: 568px");
      if (media800.matches) {
        let urlImgM = `url('http://localhost:1337${imgM}')`
        bgBody.style.backgroundImage = urlImgM;
        bgButtonClick(btnDataSet);
      }
      
      let media1200 = window.matchMedia("(min-width: 1200px) and (min-height: 568px");
      if (media1200.matches) {
        let urlImgL = `url('http://localhost:1337${imgL}')`;
        bgBody.style.backgroundImage = urlImgL;
        let root = document.querySelector('body > div');
        bgButtonClick(btnDataSet);
      }
    }

    /* FUNCTION BACKGROUND BUTTON ON SERVICE CLIK*/
    function bgButtonClick(btnDataSet) {
      switch(btnDataSet) {
        case "0":
          bgBody.style.backgroundPositionY = 'center';
          allBtn[0].style.backgroundColor = 'white';
          allBtn[1].style.backgroundColor = 'gray';
          allBtn[2].style.backgroundColor = 'gray';
          allBtn[3].style.backgroundColor = 'gray';
          allBtn[4].style.backgroundColor = 'gray';
          allBtn[5].style.backgroundColor = 'gray';
          break;
        case "1":
          bgBody.style.backgroundPositionY = 'center';
          allBtn[0].style.backgroundColor = 'gray';
          allBtn[1].style.backgroundColor = 'white';
          allBtn[2].style.backgroundColor = 'gray';
          allBtn[3].style.backgroundColor = 'gray';
          allBtn[4].style.backgroundColor = 'gray';
          allBtn[5].style.backgroundColor = 'gray';
          break;
        case "2":
          allBtn[0].style.backgroundColor = 'gray';
          allBtn[1].style.backgroundColor = 'gray';
          allBtn[2].style.backgroundColor = 'white';
          allBtn[3].style.backgroundColor = 'gray';
          allBtn[4].style.backgroundColor = 'gray';
          allBtn[5].style.backgroundColor = 'gray';
        break;
        case "3":
          allBtn[0].style.backgroundColor = 'gray';
          allBtn[1].style.backgroundColor = 'gray';
          allBtn[2].style.backgroundColor = 'gray';
          allBtn[3].style.backgroundColor = 'white';
          allBtn[4].style.backgroundColor = 'gray';
          allBtn[5].style.backgroundColor = 'gray';
        break;
        case "4":
          allBtn[0].style.backgroundColor = 'gray';
          allBtn[1].style.backgroundColor = 'gray';
          allBtn[2].style.backgroundColor = 'gray';
          allBtn[3].style.backgroundColor = 'gray';
          allBtn[4].style.backgroundColor = 'white';
          allBtn[5].style.backgroundColor = 'gray';
        break;
        case "5":
          allBtn[0].style.backgroundColor = 'gray';
          allBtn[1].style.backgroundColor = 'gray';
          allBtn[2].style.backgroundColor = 'gray';
          allBtn[3].style.backgroundColor = 'gray';
          allBtn[4].style.backgroundColor = 'gray';
          allBtn[5].style.backgroundColor = 'white';
        break;
        default:
          return;
      }
    }
    /* FUNCTION START PAGE */
    // function start() {

    // }
    window.addEventListener('resize', imgTest);
    
    imgTest();

  return (
    <>
      <Header />
      <MainServices 
        title={title}
        description={description}
        price={price}
      />
    </>
  )
}

export default Services;