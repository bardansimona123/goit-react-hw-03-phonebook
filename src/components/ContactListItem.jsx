import React from 'react';

const ContactListItem = ({ contact, styles }) => (
  <li className={styles.contactListItem}>
    {contact.name}: {contact.number}
  </li>
);

export default ContactListItem;

