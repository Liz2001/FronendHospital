import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-image-login body">
      <div className="row p-5 h-100">
        <div className="col-1 col-sm-4 col-md-4 col-lg-6 col-xl-8"></div>
        <div className="col-11 col-sm-8 col-md-8 col-lg-6 col-xl-4 p-5">
          <div className="border p-3 rounded my-auto bg-white">
            <div className="text-center">Login</div>
            <hr />
            <div className="p-1">Email</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Escriba su correo electrónico"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="p-1">Password</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon2"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input p-1"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <div className="row mt-3">
              <div className="col text-end">
                <a
                  className="btn btn-primary"
                  href="register.html"
                  role="button"
                >
                  Registrarse
                </a>
              </div>
              <div className="col text-start">
                <a
                  className="btn btn-primary"
                  href="principal.html"
                  role="button"
                >
                  Iniciar sesión
                </a>
              </div>
            </div>
            <p className="text-center mt-3">
              ¿Olvidó su contraseña? Ingrese
              <Link to={"inicio/"} className="text-color-blue pb-2">
                aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
