import React from 'react';
import NikeAir from './img/Nike-Air.png'
import NikeAirMax from './img/Nike-air-max.png'
import NikeAntiClog from './img/Nike-Anti-Clog.png'
import NikeFlyease from './img/Nike-Flyease.png'
import NikeFlyknit from './img/Nike-Flyknit.png'
import NikeKD14 from './img/tenis-nike-kd14.png'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

      calcados:[
        {
          id:1,
          nome:"Nike Air",
          imagemUrl: NikeAir
        },
        {
          id:2,
          nome:"Nike Air Max",
          imagemUrl:NikeAirMax
        },
        {
          id:3,
          nome:"Nike Anti-Clog",
          imagemUrl:NikeAntiClog
        },
        {
          id:4,
          nome:"Nike Flyease",
          imagemUrl:NikeFlyease
        },
        { 
          id:5,
          nome:"Nike Flyknit",
          imagemUrl:NikeFlyknit
        },
        { 
          id:6,
          nome:"Nike KD14",
          imagemUrl:NikeKD14
        }  
      
      ]
    };
  }
  render(){
    const {calcados} = this.state;

    return(
      
      <div className="container">
        <header className="header">
        <h1>Calçados</h1>
        <hr/>
          <ul>
            <li><a href='#'>Lançamentos</a></li>
            <li><a href='#'>Feminino</a></li>
            <li><a href='#'>Masculino</a></li>
            <li><a href='#'>Infantil</a></li>
            <li className='search'>
              <FontAwesomeIcon icon={faSearch} />
              <input type='text' placeholder="O que você procura?"></input>
              
              
            </li>
          </ul>
          <hr/>
        </header>
        <main className="main">
          <ul>
            {calcados.map((calcado)=>(
              <li key = {calcado.id}>
                <div className="imagem">

                  
                  <img src={calcado.imagemUrl} className={calcado.class} alt={calcado.nome}/>
                </div>
                <div className='info'>
                
                <h3>{calcado.nome}</h3>

                </div>
              </li>
              
                
            ))}
          </ul>
        </main>
      </div>
    );
  }
}
