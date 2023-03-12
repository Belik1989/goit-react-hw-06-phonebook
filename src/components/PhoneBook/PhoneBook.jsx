import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  ContactFormINput,
  FormLabel,
  AddContactFormBtn,
} from './PhoneBook.styled';
import shortid from 'shortid';

export function PhoneBook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameChange = event => {
    event.preventDefault();
    setName(event.currentTarget.value);
  };
  const numberChange = event => {
    event.preventDefault();
    setNumber(event.currentTarget.value);
  };
  const contactSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: name,
      id: shortid.generate(),
      number: number,
    };
    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={contactSubmit}>
      <FormLabel htmlFor="name">
        Name
        <ContactFormINput
          type="text"
          placeholder="Contact name"
          name="name"
          value={name}
          onChange={nameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FormLabel>
      <FormLabel htmlFor="number">
        Number
        <ContactFormINput
          type="tel"
          name="number"
          value={number}
          onChange={numberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Phone number"
        />
      </FormLabel>
      <AddContactFormBtn type="submit">Add contact +</AddContactFormBtn>
    </Form>
  );
}

PhoneBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
