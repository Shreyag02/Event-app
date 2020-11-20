import React from 'react';

const EventCard = ({event,markComplete}) => {
    return (
        <div className="col-md-3 text-center border m-2 p-1">
            <div className="d-flex justify-content-around border-bottom align-items-center mb-1 p-1">
                <h3 className="mb-0">{event.eventName}</h3>
                <p className="mb-0 ml-auto" onClick={() => markComplete(event.id)}>&#x2716;</p>
            </div>
            <p className="text-left h6">{event.eventDescription}</p>
            <div className="border-top">
            <h5>{event.eventLocation}</h5>
            <h6 className="d-flex justify-content-around">
                <div>{event.eventDate}</div>
                <div>{event.eventTime}</div>
            </h6>
            </div>
        </div>
    );
}

export default EventCard;
