import React from "react";
import "../styles/hero.css"; // Arquivo de estilos
import heroImg from "../assets/LogoLanche.png"; // Substitua pela sua imagem real

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>O sabor que conquista!</h1>
        <p>
          Desde 1980, nós da Famintos temos o compromisso de transformar cada refeição em uma experiência única.
          Com paixão pela culinária e dedicação à qualidade, criamos pratos irresistíveis que conquistam gerações.
        </p>

        <p>
          Acreditamos que boa comida vai além do sabor – é sobre tradição, momentos compartilhados e a felicidade de cada cliente ao
          saborear nossos pratos. Do hambúrguer artesanal à pizza que derrete na boca, cada ingrediente é escolhido com carinho para garantir uma experiência inesquecível.
        </p>
        <p>
          Venha nos conhecer e descubra por que, há mais de quatro décadas, somos referência em sabor e qualidade!
        </p>
        <button className="hero-btn">Ver Cardápio</button>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Prato delicioso" />
      </div>
    </section>
  );
};

export default Hero;
