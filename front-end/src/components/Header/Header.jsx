import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Para decodificar o token JWT
import './Header.css';

const Header = () => {
  const [role, setRole] = useState(null); // Estado para armazenar o papel do usuário

  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decodifica o token
        setRole(decodedToken.role); // Define o papel do usuário no estado
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  }, []);

  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="#principal">Caffé-Lanche</a>
      </div>
      <div className="links-container">
        <nav>
          {/* Exibe o link para o Dashboard apenas para admin ou manager */}
          {(role === 'cm7ugpmcn0000ij0bxzlaq6ek' ||
            role === 'cm7ugpmdo0002ij0bv9yq5418') && (
            <Link to={'/dashboard'}>Dashboard</Link>
          )}
          <a href="#card-container-home">Menu</a>
          <Link to={'/sale-order'}>Pedidos</Link>
          <a href="#contact-container-home">Sobre Nós</a>
          <a href="#contact-container-home">Contato</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
