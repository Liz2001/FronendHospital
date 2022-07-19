import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CitasProximas = () => {
  const filas = [
    {
      index: 1,
      motivo: "Dolor de estómago",
      doctor: "Dr. Mariano Quis...",
      fecha: "17/05/2022 16:00",
      diagnostico:
        "Infección de estómago, tomar amoxicilina en mañana y noche.",
      receta: "Amoxicilina 15g",
      calificacion: null,
    },
    {
      index: 2,
      motivo: "Radiografía de rodilla",
      doctor: "Dra. Rocío Quint...",
      fecha: "23/05/2020 15:00",
      diagnostico:
        "Golpe en la sección superior de radio. Frotar Extenze cuando sienta dolor.",
      receta: "Extenze gel 40g",
      calificacion: 4,
    },
    {
      index: 3,
      motivo: "Chekeo trimestral",
      doctor: "Dr. Steven Stran...",
      fecha: "17/06/2020 18:00",
      diagnostico: "Nada grave, volver dentro de 3 meses.",
      receta: "-",
      calificacion: 5,
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const stars = (num) => {
    console.log(num);
    switch(num) {
      case 1: return '⭐';
      case 2: return "⭐⭐";
      case 3: return "⭐⭐⭐";
      case 4: return "⭐⭐⭐⭐";
      case 5: return "⭐⭐⭐⭐⭐";
      default: return "error";
    }
  }

  const tableHeader = () => {
    return (
      <thead>
        <tr>
          <th scope="col" className="text-center">
            #
          </th>
          <th scope="col" className="text-center">
            Motivo
          </th>
          <th scope="col" className="text-center">
            Doctor(a)
          </th>
          <th scope="col" className="text-center">
            Fecha
          </th>
          <th scope="col" className="text-center">
            Diagnóstico
          </th>
          <th scope="col" className="text-center">
            Medicinas recetadas
          </th>
          <th scope="col" className="text-center">
            Calificación
          </th>
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    return (
      <tbody>
        {filas.map((fila) => {
          return (
            <tr>
              <th scope="row" className="text-center">{fila.index}</th>
              <td>{fila.motivo}</td>
              <td>{fila.doctor}</td>
              <td>{fila.fecha}</td>
              <td>{fila.diagnostico}</td>
              <td>{fila.receta}</td>
              <td className="text-center">{fila.calificacion ? stars(fila.calificacion) : 
                <button type="button" className="btn btn-primary" onClick={handleShow}>
                  Calificar
                </button>
              }
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const tabla = () => {
    return (
      <div className="row ps-3 pe-3">
        <div className="col-md-12">
          <div className="bg-white rounded p-4">
            <h2 className="pt-2 pb-2">Historial de citas:</h2>
            <table className="table">
              {tableHeader()}
              {tableBody()}
            </table>
          </div>
        </div>
      </div>
    );
  };

  const modal = () => {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Calificar cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Atención recibida por Dr. Marino Quispe Rodrigo Pablo
          <br />
          <br />
          Rating: &#11088;&#11088;&#11088;&#11088;&#10240;&#10240;
          <br />
          <br />
          Puede brindarle comentarios adicionales a el(la) doctor(a):
          <input
            type="email"
            height="60"
            className="form-control mt-2"
            placeholder="Comentarios adicionales"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar calificación
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const citas = () => {
    return (
      <div className="col-md-6">
        <div className="bg-white rounded p-4 h-100">
          <h2 className="pt-2 pb-2">Citas próximas:</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th scope="col" className="text-center">
                  Motivo
                </th>
                <th scope="col" className="text-center">
                  Doctor(a)
                </th>
                <th scope="col" className="text-center">
                  Fecha
                </th>
                <th scope="col" className="text-center">
                  Ver detalles
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary text-white">
                <th scope="row" className="text-center">
                  1
                </th>
                <td>Dolor de estómago</td>
                <td>Dr. Mariano Quis...</td>
                <td>17/05/2022 16:00</td>
                <td className="text-center">
                  <h5>{">"}</h5>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-center">
                  2
                </th>
                <td>Radiografía de rodilla</td>
                <td>Dra. Rocío Quint...</td>
                <td>23/05/2020 15:00</td>
                <td className="text-center">
                  <h5>{">"}</h5>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-center">
                  3
                </th>
                <td>Chekeo trimestral</td>
                <td>Dr. Steven Stran...</td>
                <td>17/06/2020 18:00</td>
                <td className="text-center">
                  <h5>{">"}</h5>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <a className="btn btn-primary ms-4" href="inicio.html">
              Reservar cita
            </a>
          </div>
        </div>
      </div>
    );
  };

  const detalles = () => {
    return (
      <div className="col-md-6">
        <div className="bg-white rounded p-4">
          <h2 className="pt-2 pb-2">Detalles de cita:</h2>
          <h5>Motivo</h5>
          <div className="form-control">Dolor de estómago</div>
          <h5 className="mt-3 mb-2">Doctor(a)</h5>
          <div className="form-control">Dr. Marino Quispe Rodrigo Pablo</div>
          <h5 className="mt-3 mb-2">Fecha</h5>
          <div className="form-control">17 de mayo de 2022</div>
          <h5 className="mt-3 mb-2">Hora</h5>
          <div className="form-control">16:00</div>
          <h5 className="mt-3 mb-2">Tipo de cita</h5>
          <div className="form-control">Presencial</div>
          <h5 className="mt-3 mb-2">Lugar</h5>
          <div className="form-control">
            Hospital San Martín, Av. Atardecer 183, San Miguel
          </div>
          <div className="text-center mt-3">
            <button type="button" className="btn btn-danger">
              Cancelar cita
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="row p-3">
        {citas()}
        {detalles()}
      </div>
      {tabla()}
      {modal()}
    </>
  );
};

export default CitasProximas;
