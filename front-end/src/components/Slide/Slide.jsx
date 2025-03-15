import { React } from 'react';
import slides from '../../data/slide.json';
import './Slide.css';

const Slide = ({ type }) => {
  const filteredSlides = slides.filter((slide) => slide.type === type);
  return (
    <div className="slide">
      {filteredSlides.map((item, index) => (
        <div key={index} className="slide-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Slide;
