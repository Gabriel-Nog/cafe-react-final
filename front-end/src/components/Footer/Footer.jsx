import { React } from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy;{year} Capacita</p>
    </footer>
  );
};

export default Footer;
