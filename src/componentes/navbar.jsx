import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo e Nome */}
      <div className="logo-container">
        <a href="/">
          <img src="/src/assets/LogoLanche.png" alt="Logo Faminto's" />
        </a>
        <h1 className="txtLogo">Faminto's</h1>
      </div>

      {/* Botão do Menu Hambúrguer */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menu de Navegação */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#sobre">Sobre</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
