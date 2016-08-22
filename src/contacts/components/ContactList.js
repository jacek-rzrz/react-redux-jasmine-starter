import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts }) => (
  <div>
    {contacts.map(e => <Contact key={e.get('name')} name={e.get('name')} />).toArray()}
  </div>
);

export default ContactList;
