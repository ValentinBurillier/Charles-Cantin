import React, { useState, useEffect } from 'react';
import styles from './SectionGallery.module.css';

let footer = document.getElementsByTagName('footer')[0];
footer.style.backgroundColor = 'transparent';
footer.style.border = 'initial';
console.dir(footer);
function SectionGallery() {
  const [data, setData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedImageUrls, setSelectedImageUrls] = useState([]);

  /* GET ALL API DATA */
  useEffect(() => {
    fetch('http://localhost:1337/api/categories-p?populate=*')
      .then(response => response.json())
      .then(json => {
        setData(json.data); // Array type
        const marriageIndex = json.data.findIndex(category => category.attributes.category === 'Mariage'); // Index 0
        handleTitleClick(marriageIndex, json.data[marriageIndex].attributes.images.data);
        createUrls(json.data[0].attributes.images.data[0].attributes.url, json.data[0].attributes.images.data[1].attributes.url);
      })
      .catch(error => console.log(error));
  }, []);

  /* CREATE NEW ARRAY CONTAINS ALL CATEGORY IN EACH H2 TAG */
  const titleElements = data.map((category, index) => {
    return (
      <h2
        key={index}
        onClick={() => handleTitleClick(index, category.attributes.images.data)}
        style={{ textDecoration: selectedTitle === index ? 'underline' : 'none' }}
      >
        {category.attributes.category}
      </h2>
    );
  });

  /* DISPLAY AND CHANGE IMAGE AND STYLE ON CLICK TITLE */
  function handleTitleClick(index, imageUrls) {
    setSelectedTitle(index);
    setSelectedImageUrls(imageUrls.map(image => `http://localhost:1337${image.attributes.url}`));
  }

  /* DISPLAY IMAGES MARIAGE CATEGORY AT START */
  function createUrls(url1, url2) {
    setSelectedImageUrls([`http://localhost:1337${url1}`, `http://localhost:1337${url2}`]);
  }

  /* CREATE IMAGE */
  const imageElements = selectedImageUrls.map((imageUrl, index) => {
    return <img key={index} src={imageUrl} width="177" height="264" />;
  });


  /* {titleElements} : DISPLAY EACH H2 TAG FROM TITLEELEMENTS ARRAY */
  /* {imageElements} : DISPLAY EACH IMG FROM IMAGEELEMENTS ARRAY */
  return (
    <section className={styles.Main__section}>
      <section className={styles.Section__tlSection}>{titleElements}</section> 
      <section className={styles.Section__brSection}>
        <div className={styles.Section__ContainerImg}>{imageElements}</div>
      </section>
    </section>
  );
}

export default SectionGallery;
