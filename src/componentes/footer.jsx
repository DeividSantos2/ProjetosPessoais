import React from "react";
import "../styles/footer.css"; // Arquivo de estilos
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Ícones

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Famintos's Restaurante</h3>
        <p>O melhor sabor, a qualquer hora do dia!</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <p className="footer-rights">© 2024 Famintos's Restaurante - Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
