import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './formProduct.css';

const FormProduct = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameProduct = event.target.nameProduct.value;
    const imageProduct = event.target.imageProduct.files[0];
    const slugProduct = event.target.slugProduct.value;
    const priceProduct = event.target.priceProduct.value;

    if (!nameProduct || !imageProduct || !slugProduct || !priceProduct) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const formData = new FormData();
    formData.append('name', nameProduct);
    formData.append('image', imageProduct); // Correspondente ao backend
    formData.append('slug', slugProduct);
    formData.append('price', priceProduct);

    try {
      await axios.post('http://localhost:3000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Produto cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar produto!');
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <div className="form-product-container">
      <div className="form-product-header">
        <h3>Formulário de Produto</h3>
      </div>
      <form className="formProduct" onSubmit={handleSubmit}>
        <div className="inputs-product-container">
          <label htmlFor="nameProduct">Nome do Produto</label>
          <input
            type="text"
            name="nameProduct"
            id="nameProduct"
            placeholder="Nome do produto"
          />
          <label htmlFor="imageProduct">Imagem para o Produto</label>
          <input type="file" name="imageProduct" id="imageProduct" />
          <label htmlFor="slugProduct">Link para o Produto</label>
          <input
            type="text"
            name="slugProduct"
            id="slugProduct"
            placeholder="Slug-do-produto"
          />
          <label htmlFor="priceProduct">Preço do Produto</label>
          <input
            type="number"
            name="priceProduct"
            id="priceProduct"
            placeholder="Preço do produto"
            step="0.01"
          />
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default FormProduct;
