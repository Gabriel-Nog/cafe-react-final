import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () =>{
    return(
        <div className="header-container">
            <div className="logo-container">
                <a href="#principal">
                Café
                </a>
            </div>
            <div className="links-container">
                <nav>
                    <a href="#card-container-home">Menu</a>
                    <Link to={'/sale-order'}>Pedidos</Link>
                    <a href="#contact-container-home">Sobre Nós</a>
                    <a href="#contact-container-home">Contato</a>
                </nav>
            </div>
        </div>
    )
}

export default Header;