import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/role');
        setRoles(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        toast.error('Erro ao buscar os papeis', {
          position: 'top-center',
          closeButton: false,
          autoClose: 3000,
        });
      }
    };
    fetchRoles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const roleId = e.target.roleId.value;

    try {
      const responseData = await axios.post(
        'http://localhost:3000/api/register',
        {
          email: String(email),
          password: String(password),
          name: String(name),
          roleId: String(roleId),
        },
      );
      console.log(responseData.data);
      toast.success(<div>Bem-vindo {name}</div>, {
        position: 'top-center',
        closeButton: false,
        autoClose: 3000,
      });
      navigate('/');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      toast.error(
        <div>
          Erro ao fazer o registro: {error.response?.data || error.message}
        </div>,
        {
          position: 'top-center',
          closeButton: false,
          autoClose: 3000,
        },
      );
    }
  };
  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Registro</h1>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" required />
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="roleId">Papel</label>
        <select name="roleId" id="roleId" required>
          <option value="#" selected>
            Selecione um papel
          </option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
