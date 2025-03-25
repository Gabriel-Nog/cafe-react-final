import React, { useEffect, useState } from 'react';
import ArrowBack from '../ArrowBack/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import './DisplayData.css';
import axios from 'axios';

const DisplayData = ({ formData }) => {
  const history = useNavigate();
  const [productValue, setProductValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { id } = jwtDecode(token);
      setUser(id);
    } else {
      toast.error('Você precisa estar logado para acessar essa página.', {
        position: 'top-center',
        closeButton: false,
        autoClose: 3000,
      });
      history('/login');
    }
  }, []);

  // Função para buscar o produto
  useEffect(() => {
    if (!formData) return null;

    async function fetchProduct() {
      setIsLoading(true); // Inicia o carregamento
      try {
        const id = formData.product;
        const response = await axios.get(
          `http://localhost:3000/api/products/sale-order/${id}`,
        );
        setProductValue([response.data]);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      } finally {
        setIsLoading(false); // Finaliza o carregamento
      }
    }

    fetchProduct();
  }, [formData]);

  function productReturn(a) {
    if (a.length === 0) return { name: '', price: 0 };
    const productName = a[0].name;
    const productPrice = a[0].price;
    return { name: productName, price: productPrice };
  }

  const handleFinalizeClick = () => {
    // Prepare the data to send to the backend
    const orderData = {
      value: productReturn(productValue).price,
      deliveryLocation: formData.table,
      userId,
      productIds: [formData.product],
    };

    console.log('orderData:', orderData);

    // Send the POST request to the backend
    axios
      .post('http://localhost:3000/api/orders', orderData)
      .then((response) => {
        if (response.status === 201) {
          toast.success('Seu pedido está chegando!', {
            position: 'top-center',
            closeButton: false,
            autoClose: 3000, // Fecha automaticamente após 3 segundos
          });
          history('/');
        } else {
          toast.error('Erro ao finalizar o pedido. Tente novamente.', {
            position: 'top-center',
            closeButton: false,
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar pedido:', error);
        toast.error('Erro ao finalizar o pedido. Tente novamente.', {
          position: 'top-center',
          closeButton: false,
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <div className="arrow-back-container-form">
        <ArrowBack />
      </div>
      {isLoading ? (
        <div className="loading-indicator">Carregando...</div> // Indicador de carregamento
      ) : (
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
                <div className="data-orders-values">
                  {productReturn(productValue).name}
                </div>
              </div>
            </div>
            <div className="price">
              <div className="data-orders">
                <strong>Valor: </strong>
                <div className="data-orders-values">
                  R$ {productReturn(productValue).price},00
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={handleFinalizeClick}>
            Finalizar
          </button>
        </div>
      )}
    </>
  );
};

export default DisplayData;
