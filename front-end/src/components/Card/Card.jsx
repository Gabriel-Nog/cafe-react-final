import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para buscar os produtos
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products/'); // Substitua pela URL correta da sua API
        setProducts(response.data); // Atualiza o estado com os produtos recebidos
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, []); // O array vazio [] garante que a função será executada apenas uma vez
  return (
    <div className="card-container">
      {products.map((product, index) => {
        return (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="card-info-price">
              <p>R$ {product.price},00</p>
              <button type="button">
                <Link to={`/sale-order/${product.id}`}>Comprar</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
