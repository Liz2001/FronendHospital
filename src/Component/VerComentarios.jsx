const VerComentario = (props) => {

    return (
        <div className="row ps-3 pe-3">
            <div className="col-md-12">
                <div className="bg-white rounded p-4">
                    <h2 className="pt-2 pb-2">Ver comentarios:</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">#</th>
                                <th scope="col" className="text-center">Persona</th>
                                <th scope="col" className="text-center">Doctor(a)</th>
                                <th scope="col" className="text-center">Fecha</th>
                                <th scope="col" className="text-center">Pregunta Respondida</th>
                                <th scope="col" className="text-center">Calificacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-center">{props.item.id}</th>
                                <td>{props.item.Persona}</td>
                                <td>{props.item.Doctor}</td>
                                <td>{props.item.Fecha}</td>
                                <td>{props.item.PreguntaRespondida}</td>
                                <td className="text-center">{props.item.Calificacion}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default VerComentario