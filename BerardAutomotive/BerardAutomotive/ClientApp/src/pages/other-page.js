import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, DateLocalizer, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { OfficeHours } from '../test/office-hours'
import { Modal, Input, Dropdown, Button, Popup } from 'semantic-ui-react'

export const OtherPage = () => {
    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState();
    const localizer = momentLocalizer(moment)
    const events = [
        {
            id: 0,
            title: 'Select',
            allDay: true,
            start: new Date(2020, 9, 1),
            end: new Date(2020, 9, 1),
        },
        {
            id: 1,
            title: 'Select',
            allDay: true,
            start: new Date(2020, 9, 2),
            end: new Date(2020, 9, 2),
        },
        {
            id: 2,
            title: 'Select',
            allDay: true,
            start: new Date(2020, 9, 3),
            end: new Date(2020, 9, 3),
        },


    ]

    const eventHandler = (event) => {
        setSelectedEvent(event);
        setOpen(true);
    }
    const options = [
        { key: 1, text: '8:00am', value: 1 },
        { key: 2, text: '9:00am', value: 2 },
        { key: 3, text: '10:00am', value: 3 },
        { key: 4, text: '11:00am', value: 4 },
        { key: 5, text: '12:00pm', value: 5 },
        { key: 6, text: '1:00pm', value: 6 },
        { key: 7, text: '2:00pm', value: 7 },
        { key: 8, text: '3:00pm', value: 8 },
        { key: 9, text: '4:00pm', value: 9 },
        { key: 10, text: '5:00pm', value: 10 },

    ]

    return (
        <>
            <div className="other">
                Contact Us Page
            <Link to="/home"> Go to home </Link>
                <OfficeHours />
                <Calendar
                    events={events}
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectEvent={eventHandler}
                    style={{ height: 400, width: 700 }}
                />
            </div>
            <Modal open={open} onClose={() => setOpen(false)} >
                <Modal.Header>
                    Message
                </Modal.Header>
                <Modal.Content>
                    <h1>Appointment set to: </h1>
                    <Dropdown placeholder="Select Time" clearable options={options} selection />
                    <div>
                        <Input placeholder="Your Full Name" />
                        <Input placeholder="Service Needed" />
                        <Input placeholder="Your Email" />
                        <Input placeholder="Your Phone Number" />
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>Cancel</Button>
                    <Button color='green'>Send</Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}
