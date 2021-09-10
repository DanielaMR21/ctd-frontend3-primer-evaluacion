import { Component } from "react";


export default class Texto extends Component{
    render(){
        return(
            <h1 className="historia">{this.props.texto}</h1>
        );
    }

}