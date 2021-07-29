import React from 'react';
import Header from '../Header';
import './Cadastro.css'

export default function Cadastro(){


   
        
    return(
        <div>
          <Header/>
          <div className='bloco-form'>
              <h2>
                Cadastre um novo Calçado
              </h2>

              <form>
                  <input
                  placeholder="Nome"
                  />
                  <br />
                  <input
                  placeholder="Url da Imagem"
                  
                  />
                  <br />
                  <button type="submit">Salvar</button>
          
              </form>
          </div>
        </div>
    )
}
        
    
