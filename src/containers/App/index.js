import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineUser, AiOutlineCreditCard } from 'react-icons/ai';
import { GrDocumentUser } from 'react-icons/gr';

import Header from '../../components/header';
import Avatar from '../../components/avatar';
import ListItem from '../../components/listItem';
import { TabButton, Tabs, TabPanel } from '../../components/tabs';
import UserForm from '../../components/userForm';
import PageHeading from '../../components/pageHeading';

import { THEME } from '../../constants';
import { updateUser as updateUserAction } from '../../actions/user.actions';

const Content = styled.div`
  min-height: calc(100vh - 48px);
  width: 100vw;
  background-color: #f6f6f6;
  display: flex;
  position: relative;
  top: 48px;
`;

const Sidebar = styled.div`
  height: 100%;
  width: 25%;
  padding: 50px 30px;

  & .sideBarOptionsContainer {
    padding: 20px 10px;
  }

  @media (max-width: ${THEME.breakpoints.sm}) {
    display: none;
    position: absolute;
    right: 100%;
    box-shadow: 4px 0px 4px #e8e8e8;
    &.slideOut {
      display: block;
      right: 10%;
      width: 90%;
      z-index: 9000;
      box-sizing: border-box;
      height: 100%;
      background-color: #f6f6f6;
    }
  }
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  padding: 5px 2px;
  width: 95%;
`;

const NameEmailContainer = styled.div`
  width: 100%;
  text-align: center;
  & p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  & .name {
    margin: 0 0 5px 0;
    font-weight: bold;
    font-size: 1em;
  }

  & .email {
    margin: 0;
    font-weight: bold;
    font-size: 14px;
    color: #656565;
  }
`;

const ContentMain = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  align-items: center;
  @media (max-width: ${THEME.breakpoints.sm}) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 30px 0px;
  @media (min-width: ${THEME.breakpoints.md}) {
    width: 60%;
  }
`;

const App = ({ user, updateUser }) => {
  const [isMainInformation, setIsMainInformation] = React.useState(true);

  const [showSideBar, setShowSideBar] = React.useState(false);

  return (
    <div>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Content>
        <Sidebar {...(showSideBar ? { className: 'slideOut' } : {})}>
          <AvatarSection>
            <Avatar image={user.photo} styles={{ marginBottom: '10px' }} />
            <NameEmailContainer>
              <p className={'name'}>{`${user.firstName} ${user.lastName}`}</p>
              <p className={'email'}>{user.email}</p>
            </NameEmailContainer>
          </AvatarSection>
          <div className="sideBarOptionsContainer">
            {[
              { label: 'Home', selected: false, icon: BiHomeAlt },
              { label: 'Profile', selected: true, icon: AiOutlineUser },
              { label: 'Payments', selected: false, icon: AiOutlineCreditCard },
            ].map(({ icon, label, selected }, index) => (
              <ListItem icon={icon} label={label} key={index} selected={selected} />
            ))}
          </div>
        </Sidebar>
        <ContentMain>
          <PageHeading>Update Profile</PageHeading>
          <Tabs>
            <TabButton
              onClick={() => setIsMainInformation(true)}
              label={'Main Informaion'}
              icon={AiOutlineUser}
              isSelected={isMainInformation}
            />
            <TabButton
              onClick={() => setIsMainInformation(false)}
              label={'Additional Information'}
              icon={GrDocumentUser}
              isSelected={!isMainInformation}
            />
          </Tabs>
          <FormContainer>
            <TabPanel>
              <UserForm user={user} updateUser={updateUser} isMainInformation={isMainInformation} />
            </TabPanel>
          </FormContainer>
        </ContentMain>
      </Content>
    </div>
  );
};

App.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: updateUserAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
