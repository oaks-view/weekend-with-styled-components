import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { THEME } from '../constants';

const FloatingLabel = styled.a`
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0px;
  text-transform: capitalize;
  @media (max-width: ${THEME.breakpoints.sm}) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const TextFieldHelperText = styled.div`
  font-size: 10px;
  text-transform: capitalize;
  color: ${(props) => props.helperTextColor};
`;

const SelectFieldRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SelectOption = styled.option``;

const Select = styled.select`
  width: 100%;
  height: 30px;
  background: ${THEME.colors.grey[300]};
  border: 0px;
  outline: 0px;
  font-size: 14px;
  color: ${THEME.colors.grey[800]};
  font-weight: 500;
  border-bottom: solid 1px #707070;
`;

const SelectField = ({
  options,
  label,
  hasDefaultValue = false,
  helperText = '',
  helperTextColor = THEME.colors.grey[700],
  ...rest
}) => {
  return (
    <SelectFieldRoot>
      <FloatingLabel>{label}</FloatingLabel>
      <Select {...rest}>
        {!hasDefaultValue && <SelectOption value={null}>---- ----</SelectOption>}
        {options.map((option, index) => (
          <SelectOption value={option.value} key={index}>
            {option.label}
          </SelectOption>
        ))}
      </Select>
      <TextFieldHelperText helperTextColor={helperTextColor}>{helperText}</TextFieldHelperText>
    </SelectFieldRoot>
  );
};

SelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  helperTextColor: PropTypes.string,
  hasDefaultValue: PropTypes.bool,
};

export default SelectField;
