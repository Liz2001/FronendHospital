import { useEffect } from "react";
import Foto from "../Resources/img/preguntas.jpg";

const PreguntasMedico = (props) => {
  useEffect(() => {
    props.setPaginaActual(3);
  }, []);

  return (
    <div className="container-fluid body">
      <div className="preguntaExperto">
        <div className="row ps-5">
          <div className="col-md-6">
            <div className="row titulo">
              <h2>Pregunta al experto</h2>
            </div>
            <div className="row">
              <p>
                Podrás resolver, de forma anónima, todas tus dudas en materia de
                salud.
              </p>
            </div>
            <div className="row ps-3">
              <ul>
                <li>Recibirás una respuesta fiable y de calidad.</li>
                <li>Tu duda será resuelta en 48 horas.</li>
                <li>Y, por supuesto, de forma gratuita.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-center imagen">
            <img src={Foto} className="rounded" alt="..." />
          </div>
        </div>
        <div className="row pregunta">
          <div className="row pb-3">
            <h5>Tu pregunta</h5>
          </div>
          <div className="row inputPregunta">
            <input
              type="text"
              className="form-control"
              placeholder="Escriba aquí tu pregunta"
            />
          </div>
          <div className="row g-0 pt-4">
            <div className="col-md-9">
              <ul>
                <li>Tu pregunta se publicará de forma anónima.</li>
                <li>Intenta que tu consulta médica sea clara y breve.</li>
                <li>
                  La pregunta irá dirigida a todos los especialistas del
                  sistema, no a uno específico.
                </li>
                <li>
                  Este servicio no sustituye a una consulta con un profesional
                  de la salud. Si tienes un problema o una urgencia, acude a tu
                  médico o a los servicios de urgencia.
                </li>
                <li>
                  No se permiten preguntas sobre casos específicos o segundas
                  opiniones.
                </li>
                <li>
                  Por cuestiones de salud, no se publicarán cantidades ni dosis
                  de medicamentos.
                </li>
              </ul>
            </div>
            <div className="col-md-3 text-end pe-4">
              <button className="btn btn-primary" type="submit">
                Enviar pregunta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntasMedico;
