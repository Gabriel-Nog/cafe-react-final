import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Slide.css';

const Slide = ({ type }) => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    async function fetchSlides() {
      try {
        const response = await axios.get('http://localhost:3000/api/slides');
        setSlides(response.data);
      } catch (error) {
        console.error('Erro ao buscar slides:', error);
      }
    }
    fetchSlides();
  }, []);

  const filteredSlides =
    slides.type === type
      ? slides
      : slides.filter((slide) => slide.type === type);
  return (
    <div className="slide">
      {filteredSlides.map((item, index) => (
        <div key={index} className="slide-item">
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Slide;
