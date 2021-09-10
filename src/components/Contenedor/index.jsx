import React,{ Component } from "react";
import Swal from 'sweetalert2'
import data from '../data.json';
import Texto from '../Texto'
import Botones from '../Botones'
import Historial from '../Historial'
import './index.css';

let historialSeleccionados= [];

class Contenedor extends Component {
    constructor(props){
        super(props);
        this.state = {
            data,
            idSeleccionado:0,
            letraSeleccionada: "",
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.idSeleccionado !== this.state.idSeleccionado) {
            historialSeleccionados.push(this.state.letraSeleccionada);
        }
      }

    cambioDeEstado(numero,letra){
      this.setState({
             idSeleccionado: this.state.idSeleccionado + numero,
            letraSeleccionada: letra,
         })
    }
    
      handleClick(e){
        console.log(e.target);
        const id = e.target.id;

          
        if (this.state.idSeleccionado > 6) {
            Swal.fire({
                title:"Finalizo la historia",
        confirmButtonText:"Aceptar"})
        }else{
          switch(id){
            case "A":
              this.state.letraSeleccionada !== "A" ? this.cambioDeEstado(1,"A") :this.cambioDeEstado(2,"A")
              console.log(this.state.idSeleccionado);
            break
            case "B":
              this.state.letraSeleccionada === "A" ? this.cambioDeEstado(3,"B") :this.cambioDeEstado(2,"B")
              console.log(this.state.idSeleccionado);
            break
            default:
              console.log("Fin");
            break
          }
        }
      };
    
    render(){
        return (
            <div className="layout">

         <Texto 
         texto={this.state.data[this.state.idSeleccionado].historia}/>
        <Botones
          handleClick={this.handleClick}
          opUno={this.state.data[this.state.idSeleccionado].opciones.a}
          opDos={this.state.data[this.state.idSeleccionado].opciones.b}
        />
        <Historial
          letraSeleccionada={this.state.letraSeleccionada}
          historialSeleccionados={historialSeleccionados.map(
            (element,index) => (
              <li key={index}>{element}</li>
            ),
            this.state.data[this.state.idSeleccionado].id
          )}
        />
      </div>
        )
    }
}

export default Contenedor;