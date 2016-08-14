import React from 'react';
import Event from 'events/components/Event';

const EventList = ({ events }) => (
  <div>
    {events.map(e => <Event key={e.get('name')} name={e.get('name')} />).toArray()}
  </div>
);

export default EventList;
