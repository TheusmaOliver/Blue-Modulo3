import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './Header.css'


function Header(){
    return(
        <div>
            <header className="header">
                <Link to="/" id='titulo'><h1>Calçados</h1></Link>
                <Link to="/cadastro" className="btn" id="cadastro"><button > Cadastrar Calçado</button></Link>
                <hr/>
                    <ul>
                    <li><Link to="/lancamentos" className="btn"  >Lançamentos</Link></li>
                    <li><Link to="/feminino" className="btn">Feminino</Link></li>
                    <li><Link to="/masculino" className="btn"> Masculino</Link></li>
                    <li><Link to="/infantil" className="btn"> Infantil</Link></li>
                    <li className='search'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='text' placeholder="O que você procura?"></input>
                        
                        
                    </li>
                    </ul>
                    
                    <hr/>
          </header>
        </div>

    )
}

export default Header;