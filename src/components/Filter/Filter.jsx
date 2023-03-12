import React from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import { SearchBox, SearchInput } from './Filter.styled';

export const Filter = ({ value, onInputHandler }) => {
  return (
    <SearchBox>
      <BiSearchAlt2 />
      <label>
        <SearchInput
          label="filter"
          variant="outlined"
          placeholder="Find contacts"
          type="text"
          onChange={onInputHandler}
          value={value}
        ></SearchInput>
      </label>
    </SearchBox>
  );
};

Filter.propTypes = {
  onInputHandler: PropTypes.func.isRequired,
};
