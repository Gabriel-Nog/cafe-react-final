import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../components/Form/Form';
import DisplayData from '../../components/DisplayData/DisplayData';
import './SaleOrder.css';

const SaleOrder = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleDataSaleOrder = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setFormData(data);
    setIsFormVisible(false);
  };

  return (
    <>
      <div className="container">
        {isFormVisible ? (
          <div className="container-form">
            <Form onSubmit={handleDataSaleOrder} id={id} />
          </div>
        ) : (
          <div className="container-display-data">
            <DisplayData formData={formData} />
          </div>
        )}
      </div>
    </>
  );
};

export default SaleOrder;
