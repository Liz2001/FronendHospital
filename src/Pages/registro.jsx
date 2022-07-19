import Especialidad from "../Component/especialidad.component"
import { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

const Registro = () => {
  

  const [listaEspe, setListaEspe]=useState([])
  
  //entrada de datos
  
  useEffect(()=>{
      const dataFetch=async()=>{
          const resp =await fetch("https://hospitalul.herokuapp.com/especialidad")
          const dataEspecialidad =await resp.json()
          setListaEspe(dataEspecialidad)        
          return dataEspecialidad
      }
      dataFetch()
  },[])

  const [nombreMedico, setnombreMedico]=useState(null)
  const [correoMedico, setcorreoMedico]=useState(null)
  const [passwordMedico, setpasswordMedico]=useState(null)
  const [especialidadMedicoId, setespecialidadMedicoId]=useState("0")

const onnombreMedicoChange = (evt) => {
    setnombreMedico(evt.target.value)
}
const oncorreoMedicoChange = (evt) => {
  setcorreoMedico(evt.target.value)
}
const onpasswordMedicoChange = (evt) => {
  setpasswordMedico(evt.target.value)
}
const onespecialidadMedicoIdChange = (evt) => {
  setespecialidadMedicoId(evt.target.value)
}


const guardarNuevoMedico= (evt)=>{
  const medico={
    nombre:nombreMedico,
    correo:correoMedico,
    contrasena:passwordMedico,
    idEspecialidad:especialidadMedicoId

  }
  Axios.post("https://hospitalul.herokuapp.com/medico",{
    nombre: medico.nombre,  
    correo: medico.correo,
    contrasena: medico.contrasena,
    idEspecialidad: medico.idEspecialidad

  })
  console.log(medico)
}



  return <div className="container">

    <div id="columna">
      <div className="row">

        <div className="col-lg-6">
          <img src="/registro_imagen.png " className="img-fluid" />

        </div>
        <div className="col-lg-6">
          <div className="card" >
            <div className="card-header  text-center">
              <b>Registrar</b>
            </div>
          </div>
          <div className="card">
            <div className="card-body">

              <div className="row g-3 align-items-center pb-3">
                <div className="col-sm-3">
                  <label className="col-form-label">Nombre</label>
                </div>
                <div className="col-sm-8">

                  <input type="text" className="form-control"
                  value={nombreMedico} onChange={onnombreMedicoChange} />
                </div>

              </div>

              <div className="row g-3 align-items-center pb-3">
                <div className="col-sm-3">
                  <label className="col-form-label">correo</label>
                </div>
                <div className="col-sm-8">
                  <input type="email" className="form-control" 
                  value={correoMedico} onChange={oncorreoMedicoChange} />
                </div>

              </div>
              <div className="row g-3 align-items-center pb-3">
                <div className="col-sm-3">
                  <label className="col-form-label">contraseña</label>
                </div>
                <div className="col-sm-8">
                  <input type="password" className="form-control" aria-describedby="passwordHelpInline" 
                  value={passwordMedico} onChange={onpasswordMedicoChange} />
                </div>

              </div>

              <div className="row g-3 align-items-center">
                <div className="col-sm-3">
                  <label className="col-form-label">especialidad</label>

                </div>
                <div className="col-sm-8">


                  <div>
                    <select className="form-select" aria-label=".form-select-sm example"
                     value={especialidadMedicoId} onChange={onespecialidadMedicoIdChange}>
                    <option selected>Elija una especialidad </option>
                      {
                        listaEspe.map((info) => {
                          return <Especialidad info={info} />

                        })
                      }                       
                    </select>
                  </div>

                </div>

              </div>


              <div className="container">
                <div className="row mt-3">
                  <div className="col">
                    <div className="d-flex justify-content-center pb-3">
                      <Link className="btn btn-success"  to={"/login"}
                      onClick={guardarNuevoMedico}>Registrar</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>







          </div>
        </div>
      </div>

    </div>



  </div>
}
export default Registro 