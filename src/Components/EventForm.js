import React, {useState} from 'react';
import {
    Col,
    Button,
    Input,
    FormGroup,Label, Form
  } from "reactstrap";

import {v4} from 'uuid';

  
const EventForm = ({addEvents}) => {

    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(eventName === ""){
            return alert("Please enter event name")
        }
        const event ={
            eventName,
            eventDescription,
            eventLocation,
            eventTime,
            eventDate,
            id: v4()
        }
        addEvents(event);
        setEventName("");
        setEventTime("");
        setEventDate("");
        setEventDescription("");
        setEventLocation("");
    }


    return (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label for='eventName' sm={3}>
                                Event Name
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type='eventName'
                                    name='eventName'
                                    id='eventName'
                                    placeholder='Event Name'
                                    value={eventName}
                                    onChange={e => setEventName(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for='eventDescription' sm={3}>
                                Event Description
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type='eventDescription'
                                    name='eventDescription'
                                    id='eventDescription'
                                    placeholder='Event Description'
                                    value={eventDescription}
                                    onChange={e => setEventDescription(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for='eventDate' sm={3}>
                                Event Date
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type='eventDate'
                                    name='eventDate'
                                    id='eventDate'
                                    placeholder='Event Date'
                                    value={eventDate}
                                    onChange={e => setEventDate(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for='eventTime' sm={3}>
                                Event Time
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type='eventTime'
                                    name='eventTime'
                                    id='eventTime'
                                    placeholder='Event Time'
                                    value={eventTime}
                                    onChange={e => setEventTime(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for='eventLocation' sm={3}>
                                Event Location
                            </Label>
                            <Col sm={9}>
                                <Input
                                    type='eventLocation'
                                    name='eventLocation'
                                    id='eventLocation'
                                    placeholder='Event Location'
                                    value={eventLocation}
                                    onChange={e => setEventLocation(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <Button color="info">Create Event</Button>
                        </Form>
    );
}

export default EventForm;
