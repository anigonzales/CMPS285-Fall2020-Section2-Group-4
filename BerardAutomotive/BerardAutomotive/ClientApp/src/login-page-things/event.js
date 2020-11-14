import React from 'react'
import axios from 'axios'
import {
    Button,
    Form,
    TextArea,
} from 'semantic-ui-react'

function Event() {

    const createEvent = (values) => {
        axios.post('/api/Appointment', {
            ...values,
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className='messages'>
                <h1>Create an Event</h1>
            </div>
            <div>
                <Form>
                    <Form.Field
                        className='inputbox'
                        control={TextArea}
                        rows="5"
                        cols="40"
                        maxlength="70"
                        placeholder='Type here...'

                    />
                    <Form.Field className='inputbox' control={Button}>Submit</Form.Field>
                </Form>
            </div>
        </>
    )
}

export default Event
