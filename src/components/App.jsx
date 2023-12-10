import React from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList listContact={filterContact()} />
    </>
  );
};
