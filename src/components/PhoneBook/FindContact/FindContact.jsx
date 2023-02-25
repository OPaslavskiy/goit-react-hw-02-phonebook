import React from 'react';
import PropTypes from 'prop-types';
import { Input, TitleForLabel, Lab } from './FindContact.styled';
export const FilterContact = ({ filter }) => {
  return (
    <Lab>
      <TitleForLabel>Find contacts by Name</TitleForLabel>
      <Input type="text" onChange={filter} />
    </Lab>
  );
};

FilterContact.propTypes = {
  filter: PropTypes.func.isRequired,
};
