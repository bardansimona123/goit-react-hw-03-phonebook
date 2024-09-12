import React from 'react';

const ContactForm = ({ name, number, onChange, onSubmit, styles }) => (
  <form onSubmit={onSubmit}>
    <div className={styles.formGroup}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        value={name}
        onChange={onChange}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        id="number"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={onChange}
        required
      />
    </div>
    <button type="submit" className={styles.addContactButton}>Add Contact</button>
  </form>
);

export default ContactForm;

