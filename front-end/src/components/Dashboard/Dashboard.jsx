import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './Dashboard.css';

const Dashboard = () => {
  const [totalSales, setTotalSales] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const { role } = jwtDecode(token);
    if (
      role !== 'cm7ugpmcn0000ij0bxzlaq6ek' &&
      role !== 'cm7ugpmdo0002ij0bv9yq5418'
    ) {
      navigate('/unauthorized'); // Redireciona para uma página de acesso negado
    }
  }, [navigate]);

  useEffect(() => {
    async function fetchTotalSales() {
      try {
        const response = await axios.get('http://localhost:3000/api/sales');
        setTotalSales(response.data);
      } catch (error) {
        console.error('Erro ao buscar total de vendas:', error);
        toast.error('Erro ao buscar total de vendas');
      }
    }
    fetchTotalSales();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h4>Total de Vendas</h4>
          <p>{totalSales}</p>
        </div>
        <div className="dashboard-card">
          <h4>Cadastradar Produtos</h4>
          <Link to="/product">Cadastrar</Link>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
