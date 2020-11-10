import React from 'react'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
} from 'semantic-ui-react'

function Event() {
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
