import React from 'react';

import './App.css';
import github from './img/github.png'
import linkedin from './img/linkedin.png'

const Equipe = (props) =>{
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} github={props.github} linkedin={props.linkedin}/>
      <hr/>
    </div>
  );
}
const Sobre = (props) =>{
  return(
    <div className='info'>
      <h2>{props.nome}</h2>
      <h3>{props.cargo}</h3>
      <h3>{props.idade} anos</h3>
      <h3>
        <a href={props.github} target="_blank"> <img src={github} width="25"></img></a>
        <a href={props.linkedin} target="_blank"> <img src={linkedin} width="25"></img></a>
      </h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Conheça nossa Equipe</h1>
      </header>
      <Equipe nome="Matheus Rodrigues de Oliveira" cargo="Master Bluemer" idade="21" github="https://github.com/TheusmaOliver" linkedin="https://www.linkedin.com/in/theusmaoliver/" />
      <Equipe nome="Gustavo Molina" cargo="Professor" idade="30" github="https://github.com/gustavomolina17" linkedin="https://www.linkedin.com/in/gustavo-molina-a2798418/" />
    </div>
  );
}

export default App;
