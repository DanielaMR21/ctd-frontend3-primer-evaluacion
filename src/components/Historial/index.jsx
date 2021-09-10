import { Component } from "react";


export default class Historial extends Component {

    render() {
        const {letraSeleccionada, historialSeleccionados}=this.props;
        return (
            <div className="recordatorio">
                <h3>Selección anterior:{letraSeleccionada} </h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {historialSeleccionados}
                </ul>
            </div>

        )
    }
}