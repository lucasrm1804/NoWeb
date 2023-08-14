import React from "react";
import grupo13 from "../../imagens/Group 13.png";
import frame from "../../imagens/Frame.png";
import chevronDown from "../../imagens/chevron-down.png";


function Header() {
	return (
    <header>
      <div className="grupo40">

        <div className="grupo14">
          <img className="grupo13" src={grupo13}/>
        <img className="frame" src={frame} />
        </div>

        <nav className="retangulo45">
          <ul>
            <li>
              <span className="home" href="#">Home</span>
              <div className="sublinhado" />
            </li>
            <li>
              <div>
                <span href="#">Categoria<img src={chevronDown}/></span>
              </div>
            </li>
            <li>
              <span href="#">Sobre</span>
            </li>
            <li>
              <span href="#">Localização</span>
            </li>
            <span className="contato" href="#">Contato</span>
          </ul>
        </nav>
      </div>
      
    </header>
	)
}

export default Header;