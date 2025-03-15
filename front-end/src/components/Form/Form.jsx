import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArrowBack from '../ArrowBack/ArrowBack';
import './Form.css';

const Form = ({ onSubmit, id }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (id === undefined) {
      // Função para buscar os produtos
      async function fetchProducts() {
        try {
          const response = await axios.get(
            'http://localhost:3000/api/products/',
          );
          setProducts(response.data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      }

      fetchProducts();
    } else {
      // Função para buscar o produto
      async function fetchProduct() {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/products/sale-order/${id}`,
          );
          setProducts([response.data]);
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
        }
      }

      fetchProduct();
    }
  }, [id]);
  return (
    <>
      <div className="arrow-back-container-form">
        <ArrowBack />
      </div>
      <form onSubmit={onSubmit} id="form-sale-order">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="table">Mesa</label>
        <input type="text" id="table" name="table" />
        <label htmlFor="saleOrder">Pedido</label>
        <select id="product" name="product">
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <button type="submit">Finalizar</button>
      </form>
    </>
  );
};

export default Form;
