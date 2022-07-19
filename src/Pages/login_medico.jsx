import { Link } from "react-router-dom"
import { useState } from "react"
import Axios from "axios"
const Lo_medico = () => {

  const [correoMedico, setcorreoMedico] = useState(null)
  const [contrasenaMedico, setcontrasenaMedico] = useState(null)
  const oncorreoMedicoChange = (evt) => {
    setcorreoMedico(evt.target.value)
  }
  const oncontrasenaMedicoChange = (evt) => {
    setcontrasenaMedico(evt.target.value)
  }
  const loguearmedico = (evt) => {
    const medico={
      correo:correoMedico,
      contrasena:contrasenaMedico
    }
    console.log(medico)
    Axios.post("https://hospitalul.herokuapp.com/singup",{ 
    correo: medico.correo,
    contrasena: medico.contrasena,

  })

  }

  return <div className="container">
    <div className="row">
      <div className="col">

        <img className="img-fluid  start-9" src="https://www.campusvirtualsp.org/sites/default/files/oms_planificacion_familiar_m18_110621-84-460x250_5.png" alt="" />

      </div>
      <div className="col-6">
        <div className="card">
          <div className="card-header text-center">
            LOGIN

          </div>
          <div className="car-body container">
            <form >
              <div className="mb-3">
                <label for="login" className="form-label">Correo</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={correoMedico} onChange={oncorreoMedicoChange} />

              </div>
              <div className="mb-3">
                <label for="login" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={contrasenaMedico} onChange={oncontrasenaMedicoChange} />

              </div>
              <div className="mb-3">
                <div className="container">
                  <div className="row">
                    <div className="col">

                      <Link className="btn btn-success" to={"#"} onClick={loguearmedico}>Iniciar sesion</Link>

                    </div>
                    <div className="col">
                      <Link className="btn btn-info" to={"/Mregistro"}>Registrarse</Link>
                    </div>

                  </div>
                </div>


              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  </div>


}
export default Lo_medico