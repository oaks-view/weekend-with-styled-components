import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

import { THEME } from '../constants';
import logo from '../images/logo.svg';

const HeaderRoot = styled.header`
  background-color: #272f71;
  border: 0;
  color: #ffffff;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 4px 24px 4px 24px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10000;
  left: 0;
  width: 100%;
  & .logo {
    height: 60%;
    width: auto;
    cursor: pointer;
    display: inline;
    margin-right: 48px;
  }
`;

const MenuIcon = styled.span`
  @media (min-width: ${THEME.breakpoints.md}) {
    display: none;
  }
`;

const Header = ({ showSideBar, setShowSideBar }) => (
  <HeaderRoot>
    <MenuIcon onClick={() => setShowSideBar(!showSideBar)}>
      <AiOutlineMenu color="#ffffff" fontSize="24px" />
    </MenuIcon>
    <img src={logo} alt="" className="logo" />
  </HeaderRoot>
);

Header.propTypes = {
  children: PropTypes.node,
  showSideBar: PropTypes.bool.isRequired,
  setShowSideBar: PropTypes.func.isRequired,
};

export default Header;
