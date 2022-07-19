import { Link } from "react-router-dom"
const Inicio=()=>{
    return<body className="container">

    <div  className="position-absolute top-50 start-50 translate-middle">

        <div className="container">
            <div className="row mt-3">
                <div className="col">
                  <div className="d-flex justify-content-center pb-3">
                      <h1 className="card-title text-center ">¿Como desea ingresar?</h1> 
                  </div>
                </div>
               
             </div>

            
        </div>
       

                            <div className="container ">
                                <div className="row mt-3">
                                  <div className="col">
                                    <div className="d-flex justify-content-end pb-3">
                                        <Link to={"/login"} className="btn btn-success ">Medico</Link>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="d-flex justify-content-start">
                                        <Link to={"#"} className="btn btn-success ">Paciente</Link>
                                    </div>
                                  </div>
                                </div>
                            </div>
      
    </div>
</body>



}
export default Inicio