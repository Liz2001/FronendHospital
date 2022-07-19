
import Navbar from '../Component/Navbar';
import BarChart from '../Component/BarChart';
import Tabla from '../Component/Tabla';
import { useState } from 'react';

import {UserData} from "../Resources/Data2"

const HistConsultas =()=>{
    const [userData, setUserData] = useState(
        {
          labels: UserData.map((data)=>data.Mes),
          datasets:[
            {
              label: "Ganancias",
              data: UserData.map((data)=>data.Ganancias),
            
            }
          ]
        }
      )
      const Table=UserData.map(datitos=>{return(
        <Tabla item={datitos}/>
      )})
      
      return (
        <div >
          <Navbar />
          
          {Table}
        </div>
      )



}
export default HistConsultas