import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
// import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
   
    filter: '',
    // name: '',
    // number: '',
    // id: '',
  };

  deleteCoontact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== contactId)
    }));
  };

  handleAddContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    
  };

  handleInputChange = event => {
    console.log(event.currentTarget.value);
  }

  handleDuplicateContacts = (name, number) => {
    const { contacts } = this.state;
    const isDuplicate = !!contacts.find(contact => contact.name === name && contact.number === number)
    isDuplicate && alert(`${name} is already in contacts.`)
    return !isDuplicate
  }


  render() {
    const {contacts} = this.state

    return (
      <>
        <div>
          <h1>numberbook</h1>
          <ContactForm
            contacts={contacts}
            // onSubmit={this.handleAddContact}
            onChange={this.handleInputChange}
            addContact={this.handleAddContact} />

          <h2>Contacts</h2>
          <Filter contacts={contacts}/>
          <ContactList
            contacts={contacts}
            onDeleteContact={this.deleteCoontact}
            onCheck={this.handleDuplicateContacts} />
        </div>
      </>          
    );
  };
}

export default App;
