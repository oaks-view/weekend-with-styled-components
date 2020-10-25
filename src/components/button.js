import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { THEME } from '../constants';

const ButtonRoot = styled.button`
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  color: #fff;
  background-color: ${THEME.colors.primary.main};
`;

const Button = ({ children, ...rest }) => <ButtonRoot {...rest}>{children}</ButtonRoot>;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Button;
