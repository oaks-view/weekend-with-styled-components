import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { THEME } from '../constants';

const FloatingLabel = styled.a`
  font-size: 16px;
  font-weight: 500;
  margin: 5px 0px;
  text-transform: capitalize;
  @media (max-width: ${THEME.breakpoints.sm}) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const TextFieldRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #707070;
  width: 100%;
  height: 30px;
  margin: 5px 0px;
  background-color: ${THEME.colors.grey[300]};
`;

const TextInput = styled.input`
  width: 100%;
  background: transparent;
  border: 0px;
  outline: 0px;
  font-size: 14px;
  color: ${THEME.colors.grey[800]};
  font-weight: 500;
`;

const TextFieldHelperText = styled.div`
  font-size: 10px;
  text-transform: capitalize;
  color: ${(props) => props.helperTextColor};
`;

const TextField = ({ label, type = 'text', helperText = '', helperTextColor = THEME.colors.grey[700], ...rest }) => (
  <TextFieldRoot>
    <FloatingLabel>{label}</FloatingLabel>
    <TextInputContainer>
      <TextInput {...rest} type={type} />
    </TextInputContainer>
    <TextFieldHelperText helperTextColor={helperTextColor}>{helperText}</TextFieldHelperText>
  </TextFieldRoot>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  helperText: PropTypes.string,
  helperTextColor: PropTypes.string,
};

export default TextField;
