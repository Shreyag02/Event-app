import React, { useState, useContext, useEffect } from "react";

import {
  Row,
  Col,
  Button,
  Modal, ModalHeader, ModalBody,
} from "reactstrap";

import eventimg from "../Images/3.png"
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import EventForm from "../Components/EventForm";
import Events from "../Components/Events";
const Dashboard = () => {

    const context = useContext(UserContext);
    const [modal, setModal] = useState(false);
    const [backdrop] = useState(true);
    const [keyboard] = useState(true);
    const [events, setEvents] = useState([]);

    const toggle = () => {
        console.log("toggle");
        setModal(!modal)};
      
    const addEvents = async event => {
        setEvents([...events,event]);
      }
        useEffect(() => {
          localStorage.setItem("events",JSON.stringify(events))
        },[events])
      
        const markComplete = id => {
          setEvents(events.filter(event => event.id !== id));
    }

    //put Anypage behind login
    if(!context.user?.uid){
        return <Redirect to="/signin" />
    }
 
    return (
        <div className="mt-8">
            <Row className="col-md-12 m-0">
                <Col lg={3} className="bg-info text-center side-panel mb-5 pb-5 ">
                <img src={eventimg} className="my-img" />
                <Button onClick={toggle}
                className="text-white border border-thick border-white rounded-pill py-2 px-3 h6 mb-8">New Event &#10010;</Button>
                </Col>

                <Modal isOpen={modal} toggle={toggle} backdrop={backdrop} keyboard={keyboard}>
                    <ModalHeader toggle={toggle}>Fill Event Details</ModalHeader>
                    <ModalBody>
                        <EventForm addEvents={addEvents}/>
                    </ModalBody>
                </Modal>

                <Col lg={3}/>
                <Col lg={9}>
                    <Events events={events} markComplete = {markComplete} />
                </Col>
            </Row>
        </div>
   );
}

export default Dashboard;





