import HbodyV from "./HbodyV.component"
const Virtual =(props)=>{
	return <>
            <div className="table-responsive">
                            <table className="table">
                                <thead className="table-dark">
                                <tr>
                                    <th scope="col" >HORA</th>
                                    <th scope="col" >Lunes</th>
                                    <th scope="col" >Martes</th>
                                    <th scope="col" >Miercoles</th>
                                    <th scope="col" >Jueves</th>
                                    <th scope="col" >Viernes</th>
                                    <th scope="col" >Sabado</th>
                                    <th scope="col">Domingo</th>
                   
                                </tr>
                                </thead>
                                <HbodyV thor={props.thor}/>
                            </table>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-4 col-form-label fw-bold">Plataforma</label>
                            <div className="col-sm-8">
                              <input type="text" readonly className="form-control" id="staticEmail" value="zoom.com"/>
                            </div>
                          </div>
    
    </>
}
export default Virtual