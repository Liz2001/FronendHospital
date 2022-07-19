import HistoriaMedica from '../Component/HistoriaMedica';
import Navbar from '../Component/Navbar';
import TituloPaginaHistoriaMedica from '../Component/TituloPaginaHistoriaMedica';
import DataHistorias from '../Resources/DataHistorias';
const Historial =()=>{
    const Cards=DataHistorias.map(hmedica=>{return(
        <HistoriaMedica 
        item = {hmedica}/>
      )})
    
      return (
        <div >
          <Navbar />
          <TituloPaginaHistoriaMedica />
          {Cards}
        </div>
      )

}
export default Historial