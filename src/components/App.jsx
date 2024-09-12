import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
    notification: null
  };

  componentDidMount() {
    // Încarcă contactele din localStorage
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Salvează contactele în localStorage atunci când se actualizează
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddContact = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name && number) {
      if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        this.setState({
          notification: `${name} is already in contacts`
        });
        setTimeout(() => this.setState({ notification: null }), 3000);
        return;
      }
      const newContact = {
        id: nanoid(),
        name,
        number
      };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: ''
      }));
    }
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  render() {
    const { name, number, filter, notification } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <div className={styles.formContainer}>
          <ContactForm
            name={name}
            number={number}
            onChange={this.handleInputChange}
            onSubmit={this.handleAddContact}
            styles={styles}
          />
        </div>
        <h2 className={styles.contactsTitle}>Contacts</h2>
        <Filter
          filter={filter}
          onChange={this.handleFilterChange}
          styles={styles}
        />
        <ContactList
          contacts={this.getFilteredContacts()}
          styles={styles}
        />
        {notification && (
          <div className={styles.notification}>
            <span>{notification}</span>
            <button onClick={() => this.setState({ notification: null })} className={styles.addContactButton}>OK</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
