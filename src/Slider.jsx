import React, { useState } from 'react';
import './PhotoSlider.css';
import akaltakht from './image/akal.jpeg'
import kesgarh from './image/kesgarh.jpg'
import patna from './image/patna.jpg'
import hazur from './image/hazur.jpg'
import damdama from './image/damdama.jpg'

 


export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
        {
            name: "ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ, ਸ੍ਰੀ ਅੰਮ੍ਰਿਤਸਰ ਸਾਹਿਬ, ਪੰਜਾਬ ",
            imagesrc: akaltakht
        },
        {
            name: "ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਜੀ ਪਟਨਾ ਸਾਹਿਬ, ਬਿਹਾਰ ",
            imagesrc: patna
        },
        {
            name: "ਸ੍ਰੀ ਕੇਸਗੜ ਸਾਹਿਬ, ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ, ਪੰਜਾਬ ",
            imagesrc: kesgarh
        },
        {
            name: "ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ, ਸਾਬੋ ਕੀ ਤਲਵੰਡੀ, ਬਠਿੰਡਾ, ਪੰਜਾਬ ",
            imagesrc: damdama
        },
        {
            name: "ਸ੍ਰੀ ਅਬਿਚਲ ਨਗਰ ਹਜੂਰ ਸਾਹਿਬ ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ",
            imagesrc: hazur
        }
    ]

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <button className="nav-btn prev" onClick={prevSlide}>
        &#10094; Left
      </button>
      
      <div className="image-wrapper">
        <img 
          src={images[currentIndex].imagesrc} 
          alt={`Slide ${currentIndex + 1}`} 
          className="slider-img" 
        />
      </div>

      <button className="nav-btn next" onClick={nextSlide}>
        Right &#10095;
      </button>
    </div>
  );
}
