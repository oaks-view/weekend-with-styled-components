import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { THEME } from '../constants';

const TabIcon = ({ className, icon: Icon }) => <Icon className={className} />;
const TabIconStyled = styled(TabIcon)`
  font-size: 20px;
  margin-bottom: 6px;
  &:hover {
    color: #ffffff;
  }
`;

const TabButtonStyled = styled.div`
  height: 80px;
  width: 100%;
  border-radius: 5px;
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000000')};
  font-weight: bold;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  word-break: normal;
  text-align: center;
  background-color: ${(props) => (props.isSelected ? THEME.colors.primary.main : '#fafafa')};
  &:hover {
    background-color: ${THEME.colors.primary.main};
    color: #ffffff;
  }
`;

const TabButtonArrowDown = styled.div`
  width: 0;
  height: 0;
  margin: auto;
  height: 0;
  margin: auto;
  width: 0;
  display: flex;
  position: absolute;
  top: 80px;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 20px solid ${THEME.colors.primary.main};
  display: ${(props) => (props.isSelected ? 'block' : 'none')};
  @media (max-width: ${THEME.breakpoints.sm}) {
    display: none;
  }
`;

const TabButtonContainer = styled.div`
  padding: 2px 10px;
  flex: 1;
`;

const TabPanel = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
`;

const TabButton = ({ label, icon, isSelected = false, onClick }) => {
  return (
    <TabButtonContainer onClick={onClick}>
      <TabButtonStyled isSelected={isSelected}>
        <TabIconStyled icon={icon} isSelected={isSelected} />
        {label}
        <TabButtonArrowDown isSelected={isSelected} />
      </TabButtonStyled>
    </TabButtonContainer>
  );
};

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

TabButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { TabButton, Tabs, TabPanel };
