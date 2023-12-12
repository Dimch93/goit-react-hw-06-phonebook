import React from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
