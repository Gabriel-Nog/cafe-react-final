import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password }); // Log the data being sent

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email: String(email),
        password: String(password),
      });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message); // Log the error details
      toast.error(
        'Erro ao fazer o login: ',
        error.response?.data || error.message,
        {
          position: 'top-center',
          closeButton: false,
          autoClose: 3000,
        },
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
