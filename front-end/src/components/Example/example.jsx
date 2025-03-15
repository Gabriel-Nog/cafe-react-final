import React from 'react';
import ExampleData from '../../data/example.json';
import './example.css';

const Example = () => {
  return (
    <>
      <div>Example</div>
      <div className="example-page">
        {ExampleData.map((data, index) => (
          <div key={index} className="example-page__item">
            <div>{data.name}</div>
            <div>{data.age}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Example;
