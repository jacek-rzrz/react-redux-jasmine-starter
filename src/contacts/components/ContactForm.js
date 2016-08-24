import React from 'react';
import { Map } from 'immutable';

const ContactForm = ({ contact, onSubmit }) => {

  let title = 'Edit contact';
  if (!contact) {
    title = 'New contact';
    contact = Map();
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      <input type="text" className="name" defaultValue={contact.get('name') || ''} />
      <input type="text" className="date" defaultValue={contact.get('date') || ''} />
      <button type="submit">Save</button>
    </form>
  );
};

export default ContactForm;
