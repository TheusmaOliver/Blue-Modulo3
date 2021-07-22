import React from 'react';
import NikeAir from '../../img/Nike-Air.png'
import NikeAirMax from '../../img/Nike-air-max.png'
import NikeAntiClog from '../../img/Nike-Anti-Clog.png'
import NikeFlyease from '../../img/Nike-Flyease.png'
import NikeFlyknit from '../../img/Nike-Flyknit.png'
import NikeKD14 from '../../img/tenis-nike-kd14.png'
import Header from '../Header';
import '../../App.css'

export default class Cadastro extends React.Component{
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
        
        ],
        nomeCalcado: "",
        imagemUrlCalcado: "",
        editando: false,
        indexEditando: null
      };
    }
  
    onSubmit = (event) =>{
      event.preventDefault();
      const {calcados, nomeCalcado,imagemUrlCalcado,editando,indexEditando} = this.state;
  
      if(editando){
        const calcadosAtualizados =  calcados.map((calcado,index)=>{
          if(indexEditando === index){
            calcado.nome = nomeCalcado;
            calcado.imagemUrl = imagemUrlCalcado;
          }
  
          return calcado;
        });
  
        this.setState({
          calcados: calcadosAtualizados,
          indexEditando: null,
          editando:false
        });
  
      }else{
        this.setState({
          calcados:[
            ...calcados,
            {
              nome: nomeCalcado,
              imagemUrl:imagemUrlCalcado,
            },
          ],
        });
      }
      
      this.setState({
        nomeCalcado:'',
        imagemUrlCalcado:''
      });
    };
    
    deletar = (index) =>{
      const { calcados } = this.state;
      this.setState({
        calcados: calcados.filter((calcado,i) => i !== index )
      });
    };

    render(){
        const {calcados,nomeCalcado,imagemUrlCalcado,editando,indexEditando} = this.state;
        return(
            <div>
              <Header/>
              <div className='bloco-form'>
                  <h2>
                  {editando
                  ? `Editando: ${calcados[indexEditando]?.nome}`
                  : "Cadastre um novo Calçado"}

                  </h2>
                  <form onSubmit={this.onSubmit}>
                      <input
                      placeholder="Nome"
                      value={nomeCalcado}
                      onChange={(event) => {
                          this.setState({
                          nomeCalcado: event.target.value,
                          });
                      }}
                      />
                      <br />
                      <input
                      placeholder="Url da Imagem"
                      value={imagemUrlCalcado}
                      onChange={(event) => {
                          this.setState({
                          imagemUrlCalcado: event.target.value,
                          });
                      }}
                      />
                      <br />
                      <button type="submit">Salvar</button>
              
                  </form>
              </div>
            </div>
        )
    }
        
    
}