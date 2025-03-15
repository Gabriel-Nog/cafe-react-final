import React from 'react';
import './Contact.css';

const Contact = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} id="contact-form">
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="message">Mensagem</label>
      <textarea name="message" id="message"></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contact;
