import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, DateLocalizer, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { Modal, Input, Dropdown, Button, Popup, Grid, Icon } from 'semantic-ui-react'
import './other-page.css'
import Axios from 'axios'
import { Form as SUIForm } from 'semantic-ui-react'
import { Field, Form } from 'react-final-form'

export const OtherPage = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const localizer = momentLocalizer(moment);

    const eventHandler = ({ start }) => {
        setSelectedDate(start);
        setOpen(true);
    }
    const options = [
        { key: 1, text: '8:00am', value: moment(selectedDate).set({ 'hour': 8, 'minute': 0, 'second': 0 }).format() },
        { key: 2, text: '9:00am', value: moment(selectedDate).set({ 'hour': 9, 'minute': 0, 'second': 0 }).format() },
        { key: 3, text: '10:00am', value: moment(selectedDate).set({ 'hour': 10, 'minute': 0, 'second': 0 }).format() },
        { key: 4, text: '11:00am', value: moment(selectedDate).set({ 'hour': 11, 'minute': 0, 'second': 0 }).format() },
        { key: 5, text: '12:00pm', value: moment(selectedDate).set({ 'hour': 12, 'minute': 0, 'second': 0 }).format() },
        { key: 6, text: '1:00pm', value: moment(selectedDate).set({ 'hour': 1, 'minute': 0, 'second': 0 }).format() },
        { key: 7, text: '2:00pm', value: moment(selectedDate).set({ 'hour': 2, 'minute': 0, 'second': 0 }).format() },
        { key: 8, text: '3:00pm', value: moment(selectedDate).set({ 'hour': 3, 'minute': 0, 'second': 0 }).format() },
        { key: 9, text: '4:00pm', value: moment(selectedDate).set({ 'hour': 4, 'minute': 0, 'second': 0 }).format() },
        { key: 10, text: '5:00pm', value: moment(selectedDate).set({ 'hour': 5, 'minute': 0, 'second': 0 }).format() },
    ]

    const createAppointment = (values) => {
        Axios.post('/api/Appointment', {
            ...values,
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
                <Form onSubmit={createAppointment} render={({ handleSubmit }) => (
                    <>
                        <SUIForm onSubmit={handleSubmit}>
                            <Modal.Content>
                                <Field name="name" component="input" placeholder="Your Full Name" />
                                <Field name="email" component="input" placeholder="Email" />
                                <Field name="phone" component="input" placeholder="Phone Number" />
                                <Field name="note" component="input" placeholder="Reason for Appointment" />
                                <Field name="time" component="select">
                                    <option />
                                    {options.map(x => (
                                        <option value={x.value}>{x.text}</option>
                                    ))}
                                </Field>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => setOpen(false)}>Cancel</Button>
                                <button type="submit">Submit</button>
                            </Modal.Actions>
                        </SUIForm>
                    </>
                )} />
            </Modal>
        </>
    )
}
