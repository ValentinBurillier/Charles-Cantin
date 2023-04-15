import React, { useState, useEffect } from 'react';
import styles from './SectionGallery.module.css';

function SectionGallery() {
  const [data, setData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedImageUrls, setSelectedImageUrls] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/categories-p?populate=*')
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(error => console.log(error));
  }, []);

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

  function handleTitleClick(index, imageUrls) {
    setSelectedTitle(index);
    setSelectedImageUrls(imageUrls.map(image => `http://localhost:1337${image.attributes.url}`));
  }

  const imageElements = selectedImageUrls.map((imageUrl, index) => {
    return <img key={index} src={imageUrl} width="177" height="264" />;
  });

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