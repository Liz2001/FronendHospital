
import FotoPerfil from "../Resources/img/doctor.jpg";
import { useEffect, useState } from "react";
const PerfilMedico = (props) => {
  useEffect(() => {
    // llamar a la base de datos y obtener el médico con el id: {props.medico_id}
    // setDatoMedico(datos)
  }, []);

  const [datoMedico, setDatoMedico] = useState({
    img: FotoPerfil,
    nombre: "ADRIANA SAINZ ANTONIA MARÍA",
    cmp: "24174",
    especialidad: "OTORRINOARINGOLOGÍA",
    tipoAtencion: "PRESENCIAL",
  });

  return (
    <div class="perfilDoctor body">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-5 p-3">
          <div class="row p-3 bg-white text-dark rounded">
            <div class="row">
              <div class="col-md-3">
                <img
                  src={datoMedico.img}
                  class="img-fluid rounded-start profileDoctorImage"
                  alt="..."
                />
              </div>
              <div class="col-md-9">
                <div class="row">
                  <h5>Dr. {datoMedico.nombre}</h5>
                </div>
                <div class="row">
                  <h6>{datoMedico.especialidad}</h6>
                </div>
                <div class="row">
                  <p>Núm. Colegiado: CMP {datoMedico.cmp} RNE 24589</p>
                </div>
                <div class="row text-center">
                  <div class="col-md-4">
                    <button class="btn btn-primary" type="button">
                      Agendar cita
                    </button>
                  </div>
                  <div class="col-md-4">
                    <button class="btn btn-light" type="button">
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row bg-white p-3 mt-3 text-dark rounded">
            <h5>Consultorio</h5>
            <hr />
            <p>Próxima fecha: Mañana 16 mayo</p>
            <p>
              <a class="btn btn-primary" href="#" role="button">
                Mostrar calendario
              </a>
            </p>
            <hr />
            <p>Solo atiende pacientes privados en esta dirección</p>
            <hr />
            <p>Consulta online (descripción) - S/ 120</p>
            <p>Interconsulta por salud ocupacional (descripción) - S/ 170</p>
            <hr />
            <p>Atiende a adultos, niños a partir de 8 años.</p>
          </div>
          <div class="row bg-white p-3 mt-3 text-dark rounded">
            <h5>Experiencia</h5>
            <hr />
            <h6>Sobre mí</h6>
            <p>
              Jefe del Servicio de Endocrinología del Hospital Nacional Hipólito
              Unanue. Especialista en constante capacitación con más de 11 años
              de experiencia en...
            </p>
            <hr />
            <h6>Enfermedades tratadas</h6>
            <ul class="ps-5">
              <li>Diabetes</li>
              <li>Obesidad</li>
              <li>Hipertiroidismo</li>
            </ul>
            <hr />
            <h6>Formación</h6>
            <ul class="ps-5">
              <li>Universidad Nacional Federico Villarreal</li>
              <li>
                Hospital Italiano de Buenos Aires - Rotación de Endocrinología
                pediátrica
              </li>
              <li>
                Residentado Médico en Hospital Nacional Alberto Sabogal
                Sologuren
              </li>
            </ul>
            <hr />
            <h6>Idiomas</h6>
            <p>Español, Inglés</p>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <div class="bg-white text-dark rounded">
            <h5 class="bg-primary text-white p-3">Agendar cita</h5>
            <div class="p-3">
              <h6>Consulta online</h6>
              <hr />
              <p>Motivo de la visita</p>
              <input
                type="text"
                class="form-control"
                placeholder="Consulta online"
              />
              <hr />
              <p>Hora de cita</p>
              <div
                class="calendar"
                id="calendar-3"
                data-mdb-default-view="week"
              ></div>
              <div class="row">
                <div class="col-md-1 p-1">
                  <button
                    class="btn btn-primary text-white rounded-circle text-center disabled"
                    type="button"
                  ></button>
                </div>
                <div class="col-md-2">
                  <p class="row p-1 m-1 text-center">Lun</p>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    16:00
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                </div>
                <div class="col-md-2">
                  <p class="row p-1 m-1 text-center">Mar</p>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    16:00
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                </div>
                <div class="col-md-2">
                  <p class="row p-1 m-1 text-center">Mié</p>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    16:00
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                </div>
                <div class="col-md-2">
                  <p class="row p-1 m-1 text-center">Jue</p>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    16:00
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                </div>
                <div class="col-md-2">
                  <p class="row p-1 m-1 text-center">Vie</p>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    16:00
                  </button>
                  <button
                    class="btn btn-primary text-white rounded text-center mt-1"
                    type="button"
                  >
                    15:30
                  </button>
                </div>
                <div class="col-md-1 p-1">
                  <button
                    class="btn btn-primary text-white rounded-circle text-center"
                    type="button"
                  ></button>
                </div>
              </div>
              <hr />
              <div class="text-center">
                <a class="text-center" href="#">
                  Mostrar más horas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilMedico
