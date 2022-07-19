import { useState } from "react"
const Pdiagnostico = () => {
    const [Tmodo, setTmodo] = useState("lectura")
    const cambiarDatos = () => {

        if (Tmodo === "lectura") {
            setTmodo("escritura")
        } else {
            setTmodo("lectura")
        }
    }
    if (Tmodo == "lectura") {
        return <>
            <div className="mb-2">
                <label for="login" className="form-label">Hora cita</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-2">
                <label for="login" className="form-label">Comentario</label>

                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea"></label>
                </div>
            </div>
            <div className="mb-2">
                <label for="login" className="form-label">Diagnostico</label>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea"></label>
                </div>
            </div>
            <div className="mb-2">
                <label for="login" className="form-label">Receta</label>
                <div className="row pb-3">
                    <div className="col">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Frecuencia</option>
                            <option value="1">cada 4h</option>
                            <option value="2">cada 8h</option>
                            <option value="3">cada 12h</option>
                        </select>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Frecuencia</option>
                            <option value="1">cada 4h</option>
                            <option value="2">cada 8h</option>
                            <option value="3">cada 12h</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Agregar medicina</button>
                <div className="row">

                </div>

                <div className="row pt-3">
                    <label for="login" className="form-label fs-4">Programar siguiente cita</label>
                </div>
                <div className="mb-2">
                    <label for="login" className="form-label">Fecha</label>
                    <input type="text" className="form-control" placeholder="Fecha" />
                </div>
                <div className="mb-2">
                    <label for="login" className="form-label">Hora</label>
                    <input type="text" className="form-control" placeholder="Hora" />
                </div>
                <div>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <a href="#" className="btn btn-success" onClick={cambiarDatos}>Guardar</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    } else {
        return <>
            <div className="mb-2">
                <label for="login" className="form-label">Hora cita</label>
                <input type="text" className="form-control" disabled />
            </div>
            <div className="mb-2">
                <label for="login" className="form-label">Comentario</label>

                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" disabled></textarea>
                    <label for="floatingTextarea"></label>
                </div>
            </div>
            <div className="mb-2">
                <label for="login" className="form-label">Diagnostico</label>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" disabled></textarea>
                    <label for="floatingTextarea"></label>
                </div>
            </div>
            <div className="mb-2">
                <label for="login" className="form-label">Receta</label>
                <div className="row pb-3">
                    <div className="col">
                        <input type="text" className="form-control" disabled />
                    </div>
                    <div className="col">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" disabled>
                            <option selected>Frecuencia</option>
                            <option value="1">cada 4h</option>
                            <option value="2">cada 8h</option>
                            <option value="3">cada 12h</option>
                        </select>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col">
                        <input type="text" className="form-control" disabled />
                    </div>
                    <div className="col">
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" disabled>
                            <option selected>Frecuencia</option>
                            <option value="1">cada 4h</option>
                            <option value="2">cada 8h</option>
                            <option value="3">cada 12h</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Agregar medicina</button>
                <div className="row">

                </div>

                <div className="row pt-3">
                    <label for="login" className="form-label fs-4">Programar siguiente cita</label>
                </div>
                <div className="mb-2">
                    <label for="login" className="form-label">Fecha</label>
                    <input type="text" className="form-control" placeholder="Fecha" disabled />
                </div>
                <div className="mb-2">
                    <label for="login" className="form-label">Hora</label>
                    <input type="text" className="form-control" placeholder="Hora" disabled />
                </div>
                <div>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <a href="#" className="btn btn-success "  onClick={cambiarDatos}>Editar</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    }
}
export default Pdiagnostico