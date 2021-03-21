import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'

class App extends Component{
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    id: '',
    filter: '',
    name: '',
    number: ''
  };

  deleteCoontact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== contactId)
    }));
  };



  AddContact = newContact =>
    
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
      
    }));


  render() {
    const {contacts} = this.state


    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm contacts={contacts} />

          <h2>Contacts</h2>
          {/* <Filter /> */}
          <ContactList contacts={contacts} onDeleteContact={this.deleteCoontact }/>
        </div>
      </>          
    );
  }
}

export default App;
