import { AddContact } from './PhoneBook/AddContact';
import { RenderContact } from './PhoneBook/RenderContacts';
import { FilterContact } from './PhoneBook/FindContact';
import React, { Component } from 'react';
import Notiflix from 'notiflix';

export class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    let isName = false;
    this.state.contacts.map(
      contact => (isName = contact.name === newContact.name)
    );

    if (isName) {
      Notiflix.Notify.info(`${newContact.name} is already in contacts`);
      return;
    } else
      this.setState(prevState => {
        prevState.contacts.push(newContact);
        return { contacts: [...prevState.contacts] };
      });
  };

  changeFilter = e => {
    const findName = e.target.value;
    this.setState({ filter: findName.toLocaleLowerCase() });
  };

  deleteContact = id => {
    this.setState(prevState => {
      let newList = prevState.contacts.filter(contact => contact.id !== id);
      return { contacts: [...newList] };
    });
  };

  render() {
    const contactsFilter = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <AddContact addContact={this.addContact} />
        {this.state.contacts.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <FilterContact filter={this.changeFilter} />
            <RenderContact
              contacts={contactsFilter}
              deleteContact={this.deleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}
