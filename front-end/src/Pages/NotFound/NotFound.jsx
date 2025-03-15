import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Página Não Encontrada</h1>
      <p>
        <Link to="/">Retorne para a página principal</Link>
      </p>
    </div>
  );
};

export default NotFound;
