import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
import { addContact } from './redux/contactsSlice';
import { changeFilter } from './Redux/filtersSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const searchValue = useSelector((state) => state.filters.nameFilter);

  const handleAddContact = (newContact) => {
      dispatch(addContact(newContact));
  };

  const handleSearchChange = (e) => {
      dispatch(changeFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
      <div className="container">
          <h1 className="title">Phonebook</h1>
          <ContactForm onAddContact={handleAddContact} />
          <SearchBox inputValue={searchValue} handleChange={handleSearchChange} className="searchBox" />
          <ContactList contacts={filteredContacts} />
      </div>
  );
};

export default App;