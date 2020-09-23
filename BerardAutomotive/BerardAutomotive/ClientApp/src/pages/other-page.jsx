import React from 'react'
import {Link} from 'react-router-dom'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

export const OtherPage = () => {
    const localizer = momentLocalizer(moment)
    const events =   [
        {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2020, 9, 0),
        end: new Date(2020, 9, 1),
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2020, 9, 7),
        end: new Date(2020, 9, 10),
      },
    ]

    return (
        <div>
            This is the other page!
            <Link to="/home">Go to home</Link>
            <Calendar
                events={events}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

export default OtherPage