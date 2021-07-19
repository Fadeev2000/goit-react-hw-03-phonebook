//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

/*const init = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]*/

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const bookContacts = JSON.parse(localStorage.getItem('contacts'));

    if (bookContacts) this.setState({contacts: bookContacts})
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = newContact => {
    this.setState(prevState => (
      { contacts: [newContact, ...prevState.contacts] }
    ));
  };
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  getVisibleContacts() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const items = filter === '' ?
      contacts :
      contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter)
      );
    return items;
  };
  
  render() {
    const { filter, contacts } = this.state; 
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <div>
          <h1>Fhonebook</h1>
          <ContactForm onSubmit={this.addContact} onCheck={contacts}/>
          
          <h2>Contacts</h2>
          {contacts.length !== 0 && (
            <>
              <Filter value={filter} onChange={this.changeFilter} />

              <ContactList items={visibleContacts} onDeleteContact={this.deleteContact} />
            </>
          )}
         
        </div>
      </>
    );
  }
}

export default App;
