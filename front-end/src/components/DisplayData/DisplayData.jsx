import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBack from '../ArrowBack/ArrowBack';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DisplayData.css';

const DisplayData = () => {
  const { id } = useParams(); // Capture the 'id' from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null); // State to store product data

  useEffect(() => {
    // Fetch product data from the back-end
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/sale-order/${id}`,
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        toast.error('Erro ao carregar os dados do produto.');
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) return <p>Carregando dados do produto...</p>;

  const handleFinalizeClick = () => {
    toast.success('Seu pedido está chegando!', {
      position: 'top-center',
      closeButton: false,
      autoClose: 3000, // Automatically closes after 3 seconds
    });
    navigate('/');
  };

  return (
    <>
      <div className="arrow-back-container-form">
        <ArrowBack />
      </div>
      <div className="display-data" id="display-data">
        <div className="data-orders">
          <strong>Nome do Produto:</strong>
          <div className="data-orders-values">{product.name}</div>
        </div>
        <div className="data-orders">
          <strong>Descrição:</strong>
          <div className="data-orders-values">{product.description}</div>
        </div>
        <div className="data-orders">
          <strong>Preço:</strong>
          <div className="data-orders-values">
            R$ {product.price.toFixed(2).replace('.', ',')}
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
