import { useNavigate } from "react-router-dom";

const Register = () => {
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
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <a className="btn btn-primary" onClick={() => {navigate('/login')}}  role="button">
                Registrarse
              </a>
            </div>
            <p className="text-center mt-3">
              ¿Ya tiene una cuenta? Ingrese
              <a onClick={() => {navigate('/login')}} className="text-color-blue pb-2">
                aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
