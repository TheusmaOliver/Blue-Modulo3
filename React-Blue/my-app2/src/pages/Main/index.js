import React from 'react';
import NikeAir from '../../img/Nike-Air.png'
import NikeAirMax from '../../img/Nike-air-max.png'
import NikeAntiClog from '../../img/Nike-Anti-Clog.png'
import NikeFlyease from '../../img/Nike-Flyease.png'
import NikeFlyknit from '../../img/Nike-Flyknit.png'
import NikeKD14 from '../../img/tenis-nike-kd14.png'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Header from '../Header';
import { Link } from "react-router-dom";


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
        
        <div className="container">
          

          <main className="main">
            <Header />
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
                      <Link to="/cadastro" className="btn"> <button onClick={() => {
                        this.setState({
                          editando: true,
                          indexEditando: index,
                          nomeCalcado: calcado.nome,
                          imagemUrlCalcado: calcado.imagemUrl,
                        });
                      }} className='botaoIcon'><BorderColorIcon className='icon' id='edit' /></button> </Link>
                      <button onClick={() => this.deletar(index)} className='botaoIcon' ><DeleteIcon className='icon' id='delete' /></button>
                    </div>
                    </div>
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
  

