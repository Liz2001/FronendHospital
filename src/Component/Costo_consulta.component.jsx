
const Costo_consulta =(props)=>{
  if(props.modo=="lectura"){
    return<>
                <div className="fs-3"> Costo de consulta</div>
                <div className="mb-2">
                    <label for="login" className="form-label">Virtual</label>
                    <input type="email" className="form-control" placeholder="S/ 32.00" disabled/>
                    
                  </div>
                  <div className="mb-2">
                    <label for="login" className="form-label">Personal</label>
                    <input type="email" className="form-control" placeholder="S/ 50.00" disabled/>
                    
                  </div>
    
    </>
    }
    else{
      return<>
        <div className="fs-3"> Costo de consulta</div>
                <div className="mb-2">
                    <label for="login" className="form-label">Virtual</label>
                    <input type="email" className="form-control" placeholder="S/ 32.00"/>
                    
                  </div>
                  <div className="mb-2">
                    <label for="login" className="form-label">Personal</label>
                    <input type="email" className="form-control" placeholder="S/ 50.00" />
                    
                  </div>
      
      </>
    }
    
}
export default Costo_consulta