import PropTypes from 'prop-types';
import { List, ButtonDelete } from './ContactsList.styled';
import { BsTelephone } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';

export function ContactsList({ onDeleteContact, filterList }) {
  return (
    <List>
      {filterList.map(({ id, name, number }) => (
        <li key={id}>
          <ButtonDelete onClick={() => onDeleteContact(id)} type="button">
            Delete
          </ButtonDelete>
          <span>
            <IoIosContact />
            {name}
          </span>
          <p>
            <BsTelephone />
            {number}
          </p>
        </li>
      ))}
    </List>
  );
}

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  filterList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
