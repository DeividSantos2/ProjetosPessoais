import React from "react";
import "../styles/cardapio.css";

const Cardapio = () => {
  const pratos = [
    { id: 1, nome: "X-Bacon Supremo", preco: "R$ 29,90", img: "/src/assets/cardapio/Xbacon.jpg" },
    { id: 2, nome: "Pizza de Calabresa", preco: "R$ 39,90", img: "/src/assets/cardapio/pizza.jpeg" },
    { id: 3, nome: "Porção de Batata", preco: "R$ 19,90", img: "/src/assets/cardapio/BatataFrita.jpg" },
    { id: 4, nome: "X-Burger Especial", preco: "R$ 27,90", img: "/src/assets/cardapio/xburger.jpg" },
    { id: 5, nome: "Pizza Quatro Queijos", preco: "R$ 42,90", img: "/src/assets/cardapio/Pizza4queijos.jpg" },
    { id: 6, nome: "Porção de Onion Rings", preco: "R$ 22,90", img: "/src/assets/cardapio/AneisDeCebola.jpeg" },
    { id: 7, nome: "Cheeseburger Duplo", preco: "R$ 32,90", img: "/src/assets/cardapio/Chesse.avif" },
    { id: 8, nome: "Pizza Marguerita", preco: "R$ 37,90", img: "/src/assets/cardapio/pizzamarguerita.jpeg" },
    { id: 9, nome: "Porção de Nuggets", preco: "R$ 24,90", img: "/src/assets/cardapio/Nuggets.jpeg" },
  ];

  return (
    <section className="cardapio">
      <h2>Nossos Queridinhos</h2>
      <div className="pratos">
        {pratos.map((prato) => (
          <div className="prato" key={prato.id}>
            <img src={prato.img} alt={prato.nome} />
            <h3>{prato.nome}</h3>
            <p>{prato.preco}</p>
          </div>
        ))}
      </div>
      <button className="btn-cardapio">Conheça nosso cardápio completo !</button>
    </section>
  );
};

export default Cardapio;
