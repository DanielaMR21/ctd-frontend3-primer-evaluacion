import { Component, Fragment } from "react";


export default class Botones extends Component {
     
  handleClick =()=>{
    console.log("Se oprimio");
  }
    render() {
        return (
                <Fragment>
                    <div className="opcion">
                        <button id={"A"} onClick={this.handleClick}>{"Adsfsdfsdf"}</button>
                        <h2>{"A"}</h2>
                    </div>
                    <div className="opcion">
                        <button id={"B"} onClick={this.handleClick}>{"dsds"}</button>
                        <h2>{"B"}</h2>
                    </div>
                </Fragment>

        )
    }
}