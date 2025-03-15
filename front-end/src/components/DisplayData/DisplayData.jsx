import React from 'react';
import productsData from '../../data/products.json';
import ArrowBack from '../ArrowBack/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DisplayData.css';

const DisplayData = ({ formData }) => {
  const history = useNavigate();
  if (!formData) return null;
  const valueOrder = formData.saleOrder;

  function handleProductOrder(value) {
    const nameProduct = productsData[value].name;
    let valueProduct = productsData[value].price.toString();
    valueProduct = valueProduct.replace(/\./g, ',');
    return { nameProduct, valueProduct };
  }

  const { nameProduct, valueProduct } = handleProductOrder(valueOrder);

  const handleFinalizeClick = () => {
    toast.success('Seu pedido está chegando!', {
      position: 'top-center',
      closeButton: false,
      autoClose: 3000, // Fecha automaticamente após 3 segundos
    });
    history('/');
  };

  return (
    <>
    <div className='arrow-back-container-form'>
    <ArrowBack />
    </div>
    <div className="display-data" id="display-data">
      <div className="data-orders">
        <strong>Nome:</strong>
        <div className="data-orders-values">{formData.name}</div>
      </div>
      <div className="data-orders">
        <strong>Mesa:</strong>
        <div className="data-orders-values">{formData.table}</div>
      </div>
      <div className="data-order-prices">
        <div className="order">
          <div className="data-orders">
            <strong>Pedido:</strong>
            <div className="data-orders-values">{nameProduct}</div>
          </div>
        </div>
        <div className="price">
          <div className="data-orders">
            <strong>Valor: </strong>
            <div className="data-orders-values">R$ {valueProduct},00</div>
          </div>
        </div>
      </div>
      <button type="button" onClick={handleFinalizeClick}>
        Finalizar
      </button>
    </div>
    </>
  );
};

export default DisplayData;
