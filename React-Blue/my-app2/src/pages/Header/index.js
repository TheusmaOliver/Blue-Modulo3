import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <div>
            <header className="header">
                <Link to="/" id='titulo'><h1>Calçados</h1></Link>
                <hr/>
                    <ul>
                    <li><Link to="/lancamentos" className="btn"><a href="#" > Lançamentos</a></Link></li>
                    <li><Link to="/feminino" className="btn"><a href="#" > Feminino</a></Link></li>
                    <li><Link to="/masculino" className="btn"><a href="#" > Masculino</a></Link></li>
                    <li><Link to="/infantil" className="btn"><a href="#" > Infantil</a></Link></li>
                    <li className='search'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='text' placeholder="O que você procura?"></input>
                        
                        
                    </li>
                    </ul>
                    <Link to="/cadastro/" className="btn"><button > Cadastre-se</button></Link>
                    <hr/>
          </header>
        </div>

    )
}

export default Header;