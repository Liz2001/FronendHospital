
const HistoriaMedica = (props) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    {props.item.Nombre}
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <div>Fecha de Nacimiento: {props.item.FechaNacimiento}</div>
                        <div>Medico de Cabecera: {props.item.Medico}</div>
                        <div>Especialidad: {props.item.Especialidad}</div>
                        <div>Diagnostico: {props.item.Diagnostico}</div>
                        <div>Tratamiento: {props.item.Tratamiento}</div>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default HistoriaMedica