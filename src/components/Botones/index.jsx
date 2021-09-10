import { Component } from "react";
import './index.css'


export default class Botones extends Component {
    render() {
        const {opUno, opDos } = this.props;
        return (
            <div className="opciones">
                    <div className="opcion">
                        <button id="A" className="botones" onClick={this.props.handleClick}>A</button>
                        <h2>{opUno}</h2>
                    </div>
                    <div  className="opcion">
                        <button id="B" className="botones" onClick={this.props.handleClick}>B</button>
                        <h2>{opDos}</h2>
                    </div>
            </div>

        )
    }
}