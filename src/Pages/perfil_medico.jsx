import { Link } from 'react-router-dom'
import Perfil from "../Component/Perfil.component"
import Horario from "../Component/Horario.component"
import data from '../Resources/data'
import { useState } from "react"
const info=data.medico

const Perfil_medico =()=>{
    const[Tmodo, setTmodo]= useState("lectura")
    const[Thor, setThor]= useState("lectura")

    const cambiarDatos = () =>{
            
            if (Tmodo === "lectura"){
                setTmodo("escritura")
            }else{
                setTmodo("lectura")
            }
    }
    const cambiarHorario = () =>{
            
      if (Thor === "lectura"){
          setThor("escritura")
      }else{
          setThor("lectura")
      }
}
    return <div className="container">
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to={"/Home"}>Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                 aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to={"/Mperfil"}>Mi perfil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/CALENDARIO"}>Calendario</Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link className="nav-link" to={"/Mconsultas"}>Preguntas</Link>
                        
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to={"/Mcitas_proximas"}>Citas proximas</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link"  to={"/ConHist"}>Historial</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
      <div className="row pb-3 pt-2">
          <div className="col-4">
            <div className="fs-2 ">Mi perfil</div>
          </div>
          <div className="col d-flex justify-content-end">
            <a href="#" onClick={cambiarDatos} >Editar</a>
          </div>
        
      </div>
      <div className="row">
        <Perfil info={info} modo={Tmodo}/>
        </div>
      <div className="row pb-3 pt-2">
        <div className="col-6">
          <div className="fs-2 ">Hora de atencion</div>
        </div>
        <div className="col d-flex justify-content-end">
          <a href="#" onClick={cambiarHorario} >Editar</a>
        </div>
      
      </div>
      <div className="row">
        <Horario thor={Thor}/>
      </div>
</div>

}
export default Perfil_medico