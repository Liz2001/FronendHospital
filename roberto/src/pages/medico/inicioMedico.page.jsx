import { useEffect, useState } from "react";
import CardMedico from "../../components/cardMedico/cardMedico.component";
import Foto from "../../img/doctor.jpg";
import "./style.css";

const InicioMedico = (props) => {
  useEffect(() => {
    props.setPaginaActual(0);

    // Llamar a la base de datos y actualizar los datos con la función setDoctores(datos);
    // Ejemplo: setDoctores("url con los datos");
  }, []);

  const [doctores, setDoctores] = useState([
    {
      img: Foto,
      nombre: "ADRIANA SAINZ ANTONIA MARÍA",
      cmp: "24174",
      especialidad: "OTORRINOARINGOLOGÍA",
      tipoAtencion: "PRESENCIAL",
      medico_id: 1,
    },
    {
      img: Foto,
      nombre: "ADRIÁN ROBERTO",
      cmp: "24334",
      especialidad: "CARDIOLOGÍA",
      tipoAtencion: "VIRTUAL",
      medico_id: 2,
    },
    {
      img: Foto,
      nombre: "MARÍA SOFIA",
      cmp: "12345",
      especialidad: "DERMATOLOGÍA",
      tipoAtencion: "PRESENCIAL",
      medico_id: 3,
    },
  ]);
  return (
    <div className="container-fluid body">
      <div className="ps-3 pe-3">
        <h2 className="pt-2 pb-2">Buscar médicos:</h2>
        <div className="row g-2 pb-2">
          <h5 className="col-md-1 text-end">Especialidad:</h5>
          <div className="col-md-1 ms-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="buttonEspecialidad"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Especialidad
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="buttonEspecialidad"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Ginecología
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Medicina general
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="col-md-1 text-end">Tipo de atención:</h5>
          <div className="col-md-1">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="buttonTipoAtencion"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tipo de atención
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="buttonTipoAtencion"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Presencial
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Virtual
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="col-md-2 text-end">Buscar por nombre:</h5>
          <div className="col-md-4">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Entrada de busqueda"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="ps-3 pe-3">
        <div className="row d-flex justify-content-center">
          {doctores.map((doctor) => {
            return (
              <CardMedico
                img={doctor.img}
                nombre={doctor.nombre}
                cmp={doctor.cmp}
                especialidad={doctor.especialidad}
                tipoAtencion={doctor.tipoAtencion}
                medico_id={doctor.medico_id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InicioMedico;
