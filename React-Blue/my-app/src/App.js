import React from 'react';

import './App.css';
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import fotoMatheus from './img/matheus.jpg'
import fotoMolina from './img/gustavo-molina.jpeg'
import fotoCervera from './img/gustavo-cervera.jpeg'

const Equipe = (props) =>{
  return (
    <div>
      <Sobre foto={props.foto} nome={props.nome} cargo={props.cargo} idade={props.idade} github={props.github} linkedin={props.linkedin}/>
      <hr/>
    </div>
  );
}
const Sobre = (props) =>{
  return(
    <div className='container'>
      <h2>{props.nome}</h2>
      <div className='info'>
      <img className="foto-perfil" src={props.foto} width="100" alt="foto-perfil"></img>
      <h3>{props.cargo}</h3>
      <h3>{props.idade} anos</h3>
      <h3>
        <a href={props.github} target="_blank" rel="noopener noreferrer"> <img src={github} width="25" alt="github"></img></a>
        <a href={props.linkedin} target="_blank" rel="noopener noreferrer"> <img src={linkedin} width="25" alt="linkedin"></img></a>
      </h3>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Conheça nossa Equipe</h1>
      </header>
      <Equipe foto={fotoMatheus} nome="Matheus Rodrigues de Oliveira" cargo="Master Bluemer" idade="21" github="https://github.com/TheusmaOliver" linkedin="https://www.linkedin.com/in/theusmaoliver/" />
      <Equipe foto={fotoMolina} nome="Gustavo Molina" cargo="Professor" idade="30" github="https://github.com/gustavomolina17" linkedin="https://www.linkedin.com/in/gustavo-molina-a2798418/" />
      <Equipe foto={fotoCervera} nome="Gustavo Cervera" cargo="Representante" idade="26" github="https://github.com/gucervus" linkedin="https://www.linkedin.com/in/gustavo-carvera/" />
    </div>
  );
}

export default App;
