import Especialidad from "../Component/especialidad.component"
import data from "../Resources/data"
const Registro = () => {
  const infos = data.especialidad
  console.log(infos)
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

                  <input type="text" className="form-control" />
                </div>

              </div>




              <div className="row g-3 align-items-center pb-3">
                <div className="col-sm-3">
                  <label className="col-form-label">correo</label>
                </div>
                <div className="col-sm-8">
                  <input type="email" className="form-control" />
                </div>

              </div>



              <div className="row g-3 align-items-center pb-3">
                <div className="col-sm-3">
                  <label className="col-form-label">contraseña</label>
                </div>
                <div className="col-sm-8">
                  <input type="password" className="form-control" aria-describedby="passwordHelpInline" />
                </div>

              </div>



              <div className="row g-3 align-items-center">
                <div className="col-sm-3">
                  <label className="col-form-label">especialidad</label>

                </div>
                <div className="col-sm-8">


                  <div>
                    <select className="form-select form-select" aria-label=".form-select-sm example">
                    <option selected>Elija una especialidad </option>
                      {
                        infos.map((info) => {
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
                      <a href="/login_medico.html" className="btn btn-success ">Registrar</a>
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