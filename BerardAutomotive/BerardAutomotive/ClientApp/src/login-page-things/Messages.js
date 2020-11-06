import React from 'react'
import { Table, Checkbox, Button, Icon } from 'semantic-ui-react'

export const Messages = () => (
    <>
        <div className='messages'>
            <h1>Messages</h1>
        </div>
        <div>
            <Table compact celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Apt Date/Time</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Reason for Apt</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>November 14, 2020 - 1:00pm</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>(985)375-4231</Table.Cell>
                        <Table.Cell>Engine Problems</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2021 - 4:00pm</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>(985)298-3386</Table.Cell>
                        <Table.Cell>Oil Change</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell collapsing>
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>December 4, 2020 - 10:00am</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>(985)275-7886</Table.Cell>
                        <Table.Cell>My car broke af</Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Button
                                icon
                                size='small'
                            >
                                <Icon name='trash' />
                            </Button>
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan='5'>

                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    </>
)


