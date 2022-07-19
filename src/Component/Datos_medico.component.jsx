const Datos_medicos =(props)=>{
    if(props.modo=="lectura"){
    return <>
        <div className="mb-3">
                    <label for="login" className="form-label">Nombre</label>
                    <input type="email" className="form-control" id="nombre" placeholder={props.info.nombre} disabled/>
                    
                  </div>
                  <div className="mb-2">
                    <label for="login" className="form-label">Celular</label>
                    <input type="email" className="form-control" id="cel" placeholder="939312312" disabled/>
                    
                  </div>
                  <div className="mb-2">
                    <label for="login" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="cel" placeholder="939312312" disabled/>
                    
                  </div>
                  <div className="mb-2">
                    <label for="login" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="***********" disabled/>
                    
                  </div>  
    </>
    }
    else{
      return<>
      <div className="mb-3">
                    <label for="login" className="form-label" >Nombre</label>
                    <input type="email" className="form-control" id="nombre" placeholder="Hernan Federico Rodriguez" />
                    
                  </div>
                  <div className="mb-2">
                    <label for="login" className="form-label">Celular</label>
                    <input type="email" className="form-control" id="cel" placeholder="939312312" />
                    
                  </div>
                  <div className="mb-2">
                    <label for="login" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="cel" placeholder="lolsl@gmail.com" />
                    
                  </div>
                  <div className="mb-2">
                    <label for="login" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="***********" disabled />
                    
                  </div>       
      </>
    }

}
export default Datos_medicos