import React from "react";
import "./section1.css"
// import grupo19 from "../../imagens/Group 19.png";
import fotoMulher from "../../imagens/foto mulher layout 1.png"

function Section1() {
	return (
    <section className="section1">
      <div className="opac">
        <div className="textos">
          <h1>ILUMINE O SEU DIA A DIA!</h1>
          <p>Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!</p>
          <h2 className="chamada1">VEJA NOSSOS PRODUTOS</h2>
          <h2 className="chamada2">NOS CONHEÇA MELHOR</h2>
        </div>

          <div className="conjuntoMB">
            <img className="fotoMulher" src={fotoMulher}>
            </img>
          </div>
      </div>
    </section>
	)
}

export default Section1;
