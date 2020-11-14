import React, { useEffect } from 'react'
import {
    Button,
    Form,
    TextArea,
} from 'semantic-ui-react'
import Axios from 'axios'


function Event() {
    const createEvent = (values) => {
        Axios.post('/api/Event', {
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
                        placeholder='Type here...'

                    />
                    <Form.Field className='inputbox' control={Button}>Submit</Form.Field>
                </Form>
            </div>
        </>
    )
}

export default Event
