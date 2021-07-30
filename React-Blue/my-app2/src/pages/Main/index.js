import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Header from '../Header';
import { Link } from "react-router-dom";
import './Main.css';

export default function Main ({ calcados }){
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
 
  useEffect(() => {
    
    const results = calcados.filter(calcado =>
      calcado.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(searchTerm)
    );
    
    setSearchResults(results);
  }, [searchTerm, calcados]);

  const handleChange = event => {
     setSearchTerm(event.target.value);
   };

  
  return(
    
    <div className="container">
      <Header />
      <div className='search'>
        <FontAwesomeIcon icon={faSearch} />
        <input type='text' placeholder="O que você procura?" value={searchTerm} onChange={handleChange}></input>
      </div>
                        
                        
      <main className="main">
        <ul>
          {searchResults.map((calcado,index)=>(
            <li key = {index}>
              <div className="imagem">
                <img src={calcado.imagemUrl} alt={calcado.nome}/>
                <div className='botoes'>
                <Button variant="contained" color="primary">
                  Comprar
                </Button>
                <div className="acoes">
                  <Link to="/cadastro" className="btn"> <button className='botaoIcon'><BorderColorIcon className='icon' id='edit' /></button> </Link>
                  <button className='botaoIcon' ><DeleteIcon className='icon' id='delete' /></button>
                </div>
                </div>
              </div>
              <div className='info'>
              <h3>{calcado.nome}</h3>
              <span>R${calcado.preco}</span>
              </div>
            </li>
            
              
          ))}
        </ul>
      </main>
    </div>
  );
}
  

