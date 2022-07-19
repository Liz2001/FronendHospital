import { useNavigate } from "react-router-dom";

const NavbarP = (props) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => {navigate("/medico/")}}>
          Médicos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={props.paginaActual == 0 ? "nav-link active": "nav-link"} aria-current="page" onClick={() => {navigate("/medico/inicio")}}>
                Inicio
              </a>
            </li>
            <li className="nav-item ">
              <a className={props.paginaActual == 1 ? "nav-link active": "nav-link"} onClick={() => {navigate("/medico/perfil")}}>
                Mi perfil
              </a>
            </li>
            <li className="nav-item">
              <a className={props.paginaActual == 2 ? "nav-link active": "nav-link"}>
                Calendario
              </a>
            </li>
            <li className="nav-item">
              <a className={props.paginaActual == 3 ? "nav-link active": "nav-link"}onClick={() => {navigate("/medico/preguntas")}}>
                Preguntas
              </a>
            </li>
            <li className="nav-item">
              <a className={props.paginaActual == 4 ? "nav-link active": "nav-link"}>
                Citas próximas
              </a>
            </li>
            <li className="nav-item">
              <a className={props.paginaActual == 5 ? "nav-link active": "nav-link"}>
                Historial
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-danger ms-4" >
                Cerrar sesión
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarP
