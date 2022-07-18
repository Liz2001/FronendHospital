import Calendario from "../Component/calendario.component"
import data from "../Resources/data"
import { Link } from 'react-router-dom'
import { useEffect, useState} from "react"
const Pantalla_calendario = () => {
    const infos = data.data

    const [listadata, setListadata]=useState([])

    useEffect(()=>{
        const dataFetch=async()=>{
            const resp =await fetch("http://localhost:5000/alumno")
            const data =await resp.json()
            setListadata(data.data)
           
            return data
        }
        dataFetch()
    },[])


    return <div className="container ">

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
                            <Link className="nav-link active" to={"/CALENDARIO"}>Calendario</Link>
                        </li>
                        <li className="nav-item">

                            <Link className="nav-link" to={"#"}>Preguntas</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/Mcitas_proximas"}>Citas proximas</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Historial</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

        <div id="columna " >
            <div className="row pt-4">
                    <Calendario citas={listadata} />
                
            </div>
        </div>



    </div>

}
export default Pantalla_calendario