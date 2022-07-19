import { useNavigate } from "react-router-dom";
import { useState} from "react"
import { Link } from "react-router-dom";
import Axios from "axios"

const Register = () => {

  const [nombreMedico, setnombreMedico]=useState(null)
  const [correoMedico, setcorreoMedico]=useState(null)
  const [passwordMedico, setpasswordMedico]=useState(null)

  const onnombreMedicoChange = (evt) => {
    setnombreMedico(evt.target.value)
}
const oncorreoMedicoChange = (evt) => {
  setcorreoMedico(evt.target.value)
}
const onpasswordMedicoChange = (evt) => {
  setpasswordMedico(evt.target.value)
}


const guardarNuevoMedico= (evt)=>{
  const medico={
    nombre:nombreMedico,
    correo:correoMedico,
    contrasena:passwordMedico,

  }
  Axios.post("https://hospitalul.herokuapp.com/paciente",{
    nombre: medico.nombre,  
    correo: medico.correo,
    contrasena: medico.contrasena,

  })
  console.log(medico)
}



  const navigate = useNavigate();
  return (
    <div className="bg-image-login">
      <div className="row">
        <div className="col-1 col-sm-4 col-md-4 col-lg-6 col-xl-8"></div>
        <div className="col-11 col-sm-8 col-md-8 col-lg-6 col-xl-4 p-5">
          <div className="border p-3 rounded my-auto bg-white">
            <div className="text-center">Registrarse</div>
            <hr />
            <div>
              <div className="p-1">Nombres</div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escriba sus nombres"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={nombreMedico} onChange={onnombreMedicoChange}
                />
              </div>
            </div>
            <div>
              <div className="p-1">Apellidos</div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escriba sus apellidos"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div>
              <div className="p-1">Correo</div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escriba su correo"
                  aria-label="Username"
                  aria-describedby="basic-addon3"
                  value={correoMedico} onChange={oncorreoMedicoChange}
                />
              </div>
            </div>
            <div>
              <div className="p-1">Contraseña</div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon4">
                  @
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Escriba su contraseña"
                  aria-label="Username"
                  aria-describedby="basic-addon4"
                  value={passwordMedico} onChange={onpasswordMedicoChange}
                />
              </div>
            </div>
            <div className="text-center mt-3">
            <Link className="btn btn-primary"  to={"/loginPaciente"} onClick={guardarNuevoMedico}>Registrarse</Link>
            </div>
            <p className="text-center mt-3">
              ¿Ya tiene una cuenta? Ingrese
              <a onClick={() => {navigate('/loginPaciente')}} className="text-color-blue pb-2">
                aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register
