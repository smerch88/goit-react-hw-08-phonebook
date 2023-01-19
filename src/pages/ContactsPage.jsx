import { ContactForm } from 'components/Phonebook/ContactForm';
import { ContactList } from 'components/Phonebook/ContactList/ContactList';
import { Filter } from 'components/Phonebook/Filter/Filter';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getContacts } from 'redux/contacts/selectors';
import { addContact, removeContact } from 'redux/contacts/contactsOperations';

import { Text, Title } from '@mantine/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const deleteUser = userId => {
    dispatch(removeContact(userId));
  };

  const addUser = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    if (contacts.filter(contact => contact.name === data.name).length) {
      alert(data.name + ' is already in contacts!');
    } else {
      dispatch(addContact(newContact));
    }
  };

  const setFilterValue = data => {
    dispatch(setFilter(data));
  };

  return (
    <>
      <Title order={1} size="h1" data-aos="zoom-in">
        Phonebook
      </Title>
      <ContactForm addUser={addUser} />
      <Title order={2} size="h2" data-aos="zoom-in">
        Contacts
      </Title>
      <Text fw={400} data-aos="zoom-in">
        There are {contacts.length} contacts in the Phonebook.
      </Text>
      <Filter setFilterValue={setFilterValue} />
      <ContactList deleteUser={deleteUser} />
    </>
  );
};
