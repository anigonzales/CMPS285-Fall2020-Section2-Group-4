import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, DateLocalizer, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { Modal, Input, Dropdown, Button, Popup, Grid, Icon } from 'semantic-ui-react'
import './other-page.css'
import Axios from 'axios'
import { Field, Form } from 'react-final-form'

export const OtherPage = () => {

    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const localizer = momentLocalizer(moment)

    const eventHandler = ({ start }) => {
        setSelectedDate(start);
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

    const createAppointment = (values) => {
        Axios.post('/api/Appointment', {
            ...values,
            time: moment().toDate(),
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="other">

                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column className='officeOne'>
                            <h2><Icon name='clock' />Office Hours:</h2>
                            <h3>Mon-Sat <br /> 8:00am - 5:30pm</h3>


                        </Grid.Column>
                        <Grid.Column className='officeTwo'>
                            <h2><Icon name='location arrow' />Address:</h2>
                            <h3>723 Girod St, Mandeville, LA 70448</h3>
                        </Grid.Column>
                        <Grid.Column className='officeThree'>
                            <h2><Icon name='phone' />Phone Number:</h2>
                            <h3>(985) 624-8055</h3>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Calendar
                    views={["month"]}
                    events={[]}
                    selectable
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectSlot={eventHandler}
                    style={{ height: 400, width: 700 }}
                />
            </div>
            <Modal open={open} onClose={() => setOpen(false)} >
                <Modal.Header>
                    {moment(selectedDate).format("dddd, MMMM Do YYYY")}
                </Modal.Header>
                <Form onSubmit={createAppointment} render={({ createAppointment }) => (
                    <>
                        <form onSubmit={createAppointment}>
                            <Modal.Content>
                                <Field name="name" component="input" placeholder="Your Full Name" />
                                <Field name="email" component="input" placeholder="Email" />
                                <Field name="phone" component="input" placeholder="Phone Number" />
                                <Field name="note" component="input" placeholder="Note" />
                                <Dropdown placeholder="Select Time" clearable options={options} selection />
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => setOpen(false)}>Cancel</Button>
                                <button type="submit">Submit</button>
                            </Modal.Actions>
                        </form>
                    </>
                )} />
            </Modal>
        </>
    )
}
