import React from 'react';
import EventCard from './EventCard';

const Events =  ( {events, markComplete} ) => {
    return(
        <div className="col-md-12 d-flex flex-wrap justify-content-around mb-8 mt-3">
            {
                events.map( event => (
                    <EventCard key={event.id} markComplete={markComplete} event={event}/>
                ))
            }

        </div>
    );
}

export default Events;
