import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
const Calendario = (props) => {
  const handleEventClick = (e) => {
    console.log(e.event.startStr)
    
  }
    let pobladoCitas =[]
    props.citas.map((value)=>{
      pobladoCitas.push({ title: value.event, start: value.initdate, end: value.enddate, nombre:value.nombre.nombre })

    })
  
  return <>
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "timeGridWeek,dayGridMonth",
        center: "title"
      }}
      slotDuration="00:15:00"
      businessHours={{
        startTime: "7:00:00",
        endTime: "19:00:00",
        daysOfWeek: [1, 2, 3, 4, 5]
      }}
      timeZone="local"

      events={pobladoCitas}
      eventClick={handleEventClick}
      eventContent={renderEventContent}
      editable={true}
      selectable={true}
    />
  </>
}
export default Calendario

function renderEventContent(eventInfo) {
  return <div>
    <div>{eventInfo.event.extendedProps.nombre}</div>
  </div>
}