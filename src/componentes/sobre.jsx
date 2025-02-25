import React from "react";
import "../styles/sobre.css";

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="sobre-content">
        <h2>Sobre Nós</h2>
        <p>Desde 1980, nós da Famintos trazemos tradição e sabor para cada prato.</p>  
<p>Fundado por Marcos Felipe Nogueira e Joana Darci da Silva, o restaurante nasceu do amor pela culinária e pelo desejo de oferecer comida de qualidade.</p>  
<p>Com ingredientes selecionados e receitas especiais, seguimos conquistando gerações com muito carinho e dedicação.</p>  

    
      </div>
      
      <div className="sobre-images">
        <div>
          <img src="/src/assets/sobre/People1.png" alt="Pessoa1" />
          <h1 className="txtNome">Marcos Felipe Nogueira</h1>
        </div>
        <div>
          <img src="/src/assets/sobre/People2.png" alt="Pessoa2" />
          <h1 className="txtNome">Joana Darci da Silva</h1>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
