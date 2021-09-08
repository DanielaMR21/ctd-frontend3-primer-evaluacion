import React,{ Component } from "react";
import './index.css';
import data from './components/data.json';
import Texto from "./components/Texto/";
import Botones from "./components/Botones";
import Historial from "./components/Historial";

export default class App extends Component {
 
  state ={
    datos:[],
    seleccionado:"",
    historialSeleccionados:[]
  }

  componentDidMount(){
    this.setState({datos:data})
  }



 render(){
  return (
    <div className="App">
      <div className="layout">
      <Texto/> 
      <div className="opciones">
         <Botones className="botones"/>
      </div>  
      
      <div className="recordatorio">
         <Historial/>
      </div>
      
      </div>
    </div>
  );
 }

}

