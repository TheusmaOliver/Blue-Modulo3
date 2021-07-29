import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Header from '../Header';
import { Link } from "react-router-dom";
import './Main.css';

export default function Main ({ calcados }){


  
  return(
    
    <div className="container">
      <Header calcados={calcados} />
      <main className="main">
        <ul>
          {calcados.map((calcado,index)=>(
            <li key = {index}>
              <div className="imagem">
                <img src={calcado.imagemUrl} className={calcado.class} alt={calcado.nome}/>
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
  

