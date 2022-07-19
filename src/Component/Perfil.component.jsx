import Costo_consulta from "./Costo_consulta.component"
import Datos_medicos from "./Datos_medico.component"

const Perfil =(props)=>{
    
    return<>    
        <div className="col">
                <img  className="img-fluid" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt=""/>
            </div>
            <div className="col">
                <Datos_medicos info={props.info} modo={props.modo}/>     
            </div>
            <div className="col">
                <Costo_consulta modo={props.modo}/>
            </div>
    
    
    </>
}
export default Perfil