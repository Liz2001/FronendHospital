import { Link } from 'react-router-dom'
import ContenedorCitas from "../Component/contenedorCitas.component"

import data from "../Resources/data"
const Pro_citas_M = () => {
    const infos = data.data
    return <body className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/bienvenidos.html">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={"#"}>Mi perfil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/CALENDARIO"}>Calendario</Link>
                        </li>
                        <li className="nav-item">

                            <Link className="nav-link" to={"#"}>Preguntas</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/Mcitas_proximas"}>Citas proximas</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Historial</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>


        <div id="columna">
            <ContenedorCitas info={infos} />

        </div>


    </body>
}

export default Pro_citas_M