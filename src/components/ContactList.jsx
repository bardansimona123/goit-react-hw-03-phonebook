import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, styles }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem key={contact.id} contact={contact} styles={styles} />
    ))}
  </ul>
);

export default ContactList;

