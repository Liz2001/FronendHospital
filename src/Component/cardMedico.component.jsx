import { useNavigate } from "react-router-dom";

const CardMedico = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card m-3 cardMedico">
      <div className="row g-0">
        <div className="col-md-4 my-auto">
          <img src={props.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">{`CMP: ${props.cmp}`}</p>
            <h5 className="card-title">Especialidad: </h5>
            <p>{props.especialidad}</p>
            <h5 className="card-title">Atención: </h5>
            <p>{props.tipoAtencion}</p>
            <div className="row">
              <div className="col">
                <a
                  className="btn btn-secondary w-100"
                  role="button"
                  onClick={() => {
                    navigate(`/medico/perfilmedico/${props.medico_id}`);
                  }}
                >
                  Ver perfil
                </a>
              </div>
              <div className="col">
                <a className="btn btn-primary w-100" href="#" role="button">
                  Reservar cita
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMedico
