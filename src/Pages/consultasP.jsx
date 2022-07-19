import Navbar from '../Component/Navbar';
import ConsultasPrivadas from '../Component/ConsultasPrivadas';
import ConsultasPublicas from '../Component/ConsultasPublicas';
import PrivadasTitulo from '../Component/PrivadasTitulo';
import PublicasTitulo from '../Component/PublicasTitulo';
import VerComentario from '../Component/VerComentarios';
import DataComentario from '../Resources/DataComentario';
import DataPublica from '../Resources/DataPublica'
import DataPrivada from '../Resources/DataPrivada'


const ConsultasP =()=>{
    const Publicas=DataPublica.map(publi=>{return(
        <ConsultasPublicas
        item = {publi}/>
      )})
    
      const Privadas=DataPrivada.map(priva=>{return(
        <ConsultasPrivadas
        item = {priva}/>
      )})
    
      const Tabla=DataComentario.data.map(Comen=>{return(
        <VerComentario
        item = {Comen}/>
      )})
      
      return <div >
          <Navbar />
          <PublicasTitulo />
          {Publicas}
          <PrivadasTitulo />
          {Privadas}
          {Tabla}
        </div>
      

}
export default ConsultasP