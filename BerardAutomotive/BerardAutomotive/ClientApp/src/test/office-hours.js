import React from 'react';
import { Grid, Icon } from 'semantic-ui-react'

export const OfficeHours = () => {

    return (
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column className='officeOne'>
                    <h2><Icon name='clock' />Office Hours:</h2>
                    <h3>8:00am - 5:30pm</h3>
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
    )
}