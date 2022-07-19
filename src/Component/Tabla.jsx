const Tabla = (props) => {
    return (
        <div className="container">
            <div className="table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Mes</th>
                            <th scope="col">CantidadDeCitas</th>
                            <th scope="col">Ganancias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.item.Mes}</td>
                            <td>{props.item.CantidadDeCitas}</td>
                            <td>{props.item.Ganancias}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Tabla