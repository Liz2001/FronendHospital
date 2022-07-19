import HbodyP from "./HbodyP.component"
const Presencial =(props)=>{
	return<>
    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">Lunes</th>
                                <th scope="col">Martes</th>
                                <th scope="col">Miercoles</th>
                                <th scope="col">Jueves</th>
                                <th scope="col">Viernes</th>
                                <th scope="col">Sabado</th>
                                <th scope="col">Domingo</th>

                            </tr>
                            </thead>
                            <HbodyP thor={props.thor}/>
                        </table>
                    </div>    
    
    </>
}
export default Presencial