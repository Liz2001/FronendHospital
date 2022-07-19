
import React from "react"

const ConsultasPrivadas = (props) => {

    return (
        <div className="container">
            <div className="col">
                <div className="mb-2">
                    <div class="card">
                        <div class="card-header">
                            {props.item.Nombre}
                        </div>
                        <div class="card-body">
                            <p class="card-text">{props.item.Pregunta}</p>
                            <div className="row">
                                <div className="col">
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="col">
                                    <button type="button" onClick="return validar1();" className="btn btn-primary">Responder Respuesta</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConsultasPrivadas