import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () =>{
  return (
    <div>
      <h1>Sobre</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Retornar para página inicial.      </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sobre;