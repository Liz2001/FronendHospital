import { useEffect, useState } from "react";
import FotoUsuario from "../Resources/img/usuario.jpg";
import Extras from "../Component/Recomendaciones";
const Perfil = (props) => {
  useEffect(() => {
    props.setPaginaActual(1);

    // llamar a la base de datos y actualizar las variables las funciones: 
    // setNombre()
    // setApellido()
    // setTelefono()
    // setUsuario()
    // setEmail()
    // setContrasena()

  }, []);

  const [estaEditando, setEstaEditando] = useState(false);

  const [nombre, setNombre] = useState("Roberto");
  const [apellido, setApellido] = useState("Román Yauris");
  const [telefono, setTelefono] = useState("9876543421");
  const [usuario, setUsuario] = useState("RobertoRoman22");
  const [email, setEmail] = useState("roberto@gmail.com");
  const [contrasena, setContrasena] = useState("1234");

  const GuardarDatos = () => {
    console.log("Guardar nuevos datos en la base de datos.");
    // nombre, apellido, telefono, usuario, email, contrasena
  };
  return (<>
    <div class="ps-5 pe-5 body">
      <div class="row">
        <div class="col-md-3">
          <div class="row pt-3">
            <h2 class="row pt-2 pb-2">Mi perfil:</h2>
          </div>
          <div class="row">
            <img src={FotoUsuario} class="rounded" alt="..." />
          </div>
          <div class="row mt-4">
            <div class="col text-center">
              <button class="btn btn-outline-primary w-75" type="submit">
                Cambiar foto
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="row mt-4">
            <div class="col-md-3">
              <h5>Nombres</h5>
            </div>
            <div class="col-md-9">
              {estaEditando ? (
                <input
                  class="form-control me-2 row"
                  type="search"
                  value={nombre}
                  aria-label="Search"
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                />
              ) : (
                <p>{nombre}</p>
              )}
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-3">
              <h5>Apellidos</h5>
            </div>
            <div class="col-md-9">
              {estaEditando ? (
                <input
                  class="form-control me-2 row"
                  type="search"
                  value={apellido}
                  aria-label="Search"
                  onChange={(e) => {
                    setApellido(e.target.value);
                  }}
                />
              ) : (
                <p>{apellido}</p>
              )}
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-3">
              <h5>Telefono</h5>
            </div>
            <div class="col-md-9">
              {estaEditando ? (
                <input
                  class="form-control me-2 row"
                  type="search"
                  value={telefono}
                  aria-label="Search"
                  onChange={(e) => {
                    setTelefono(e.target.value);
                  }}
                />
              ) : (
                <p>{telefono}</p>
              )}
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-3">
              <h5>Nombre de usuario</h5>
            </div>
            <div class="col-md-9">
              {estaEditando ? (
                <input
                  class="form-control me-2 row"
                  type="search"
                  value={usuario}
                  aria-label="Search"
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                />
              ) : (
                <p>{usuario}</p>
              )}
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-3">
              <h5>Correo electrónico</h5>
            </div>
            <div class="col-md-9">
              {estaEditando ? (
                <input
                  class="form-control me-2 row"
                  type="search"
                  value={email}
                  aria-label="Search"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              ) : (
                <p>{email}</p>
              )}
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-3">
              <h5>Contraseña</h5>
            </div>
            <div class="col-md-6">
              {estaEditando ? (
                <input
                  class="form-control me-2 row"
                  type="search"
                  value={contrasena}
                  onChange={(e) => {
                    setContrasena(e.target.value);
                  }}
                  aria-label="Search"
                />
              ) : (
                <p>{contrasena}</p>
              )}
            </div>
            <div class="col-md-3 text-end pe-4">
              <button class="btn btn-outline-primary text-center" type="submit">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-2">
          {estaEditando ? (
            <div class="row mt-4 mx-auto">
              <button
                class="btn btn-primary w-75"
                type="submit"
                onClick={() => {
                  setEstaEditando(!estaEditando);
                  GuardarDatos();
                }}
              >
                Guardar
              </button>
            </div>
          ) : (
            <div class="row mt-4 mx-auto">
              <button
                class="btn btn-primary w-75"
                type="submit"
                onClick={() => {
                  setEstaEditando(!estaEditando);
                }}
              >
                Editar perfil
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    <Extras/>
    </>
  );
};

export default Perfil
