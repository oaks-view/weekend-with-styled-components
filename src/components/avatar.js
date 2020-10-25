import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import avatar from '../images/avatar.svg';

const AvatarRoot = styled.div`
  width: 4em;
  height: 4em;
  max-height: 4em;
  min-width: 4em;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50%;
  box-shadow: 1px 1px 6px #d8d8d8;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Avatar = ({ image, styles = {} }) => {
  return <AvatarRoot style={styles} image={image || avatar} />;
};

Avatar.propTypes = {
  image: PropTypes.string,
  styles: PropTypes.object,
};

export default Avatar;
