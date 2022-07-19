import Virtual from "./Virtual.component"
import Presencial from "./Presencial.component"
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
const Horario = (props) => {

    return <>

        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <div className="fs-3 text-center"> Virtual</div>
                </div>
                <div className="card-body">
                    <Virtual thor={props.thor} />
                </div>
                
            </div>
        </div>
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <div className="fs-3 text-center">Presencial</div>
                </div>
                <div className="card-body">
                    <Presencial thor={props.thor}/>
                </div>

            </div>
        </div>
    </>
}
export default Horario