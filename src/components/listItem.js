import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItemIcon = ({ className, icon: Icon }) => <Icon className={className} />;
const ListItemIconStyled = styled(ListItemIcon)`
  font-size: 20px;
  margin-right: 8px;
`;

const ListItemRoot = styled.div`
  height: 48px;
  background-color: ${(props) => (props.selected ? '#e5e5e5' : 'transparent')};
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const ListItemLabel = styled.p`
  font-size: 14px;
`;

const ListItem = ({ icon, label, selected }) => {
  return (
    <ListItemRoot selected={selected}>
      <ListItemIconStyled icon={icon} />
      <ListItemLabel>{label}</ListItemLabel>
    </ListItemRoot>
  );
};

ListItem.propTypes = {
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default ListItem;
