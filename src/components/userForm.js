import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';

import TextField from './textField';
import Form from './form';
import Button from './button';
import SelectField from './select';
import PasswordStrength from './passwordStrength';
import { THEME, COUNTRIES } from '../constants';

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 14px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${THEME.breakpoints.md}) {
    justify-content: flex-end;
  }
`;

const TextFieldContainer = styled.div`
  margin-bottom: 25px;
  @media (max-width: ${THEME.breakpoints.sm}) {
    margin-bottom: 10px;
  }
`;

const UserUpdateSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  confirmPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match!')
    .required('Required'),
  country: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const UserForm = ({ user, updateUser, isMainInformation }) => {
  const { addToast } = useToasts();

  return (
    <Formik
      initialValues={user}
      validationSchema={UserUpdateSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          updateUser(values);
          setSubmitting(false);
          addToast('Updated your information successfully!', {
            appearance: 'info',
            addToast: true,
          });
        }, 3000);
      }}
    >
      {({ isSubmitting, errors, values, handleChange, submitForm }) => (
        <Form>
          {isMainInformation && (
            <>
              <TextFieldContainer>
                <TextField
                  label="email"
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  helperText={errors.email}
                  helperTextColor={THEME.colors.error.main}
                />
              </TextFieldContainer>

              <TextFieldContainer>
                <TextField
                  label="password"
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  helperText={errors.password}
                  helperTextColor={THEME.colors.error.main}
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <TextField
                  label="confirm password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  helperText={errors.confirmPassword}
                  helperTextColor={THEME.colors.error.main}
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <PasswordStrength password={values.password} />
              </TextFieldContainer>
            </>
          )}

          {!isMainInformation && (
            <>
              <TextFieldContainer>
                <TextField
                  label="First name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  helperText={errors.firstName}
                  helperTextColor={THEME.colors.error.main}
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <TextField
                  label="last name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  helperText={errors.lastName}
                  helperTextColor={THEME.colors.error.main}
                />
              </TextFieldContainer>

              <TextFieldContainer>
                <TextField
                  label="Address (street, house number, postal code)"
                  id="address"
                  name="address"
                  type="text"
                  value={values.address}
                  onChange={handleChange}
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <SelectField
                  options={COUNTRIES}
                  label="Country"
                  id="country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  helperText={errors.country}
                  helperTextColor={THEME.colors.error.main}
                />
              </TextFieldContainer>
            </>
          )}

          <ButtonContainer>
            <Button disabled={isSubmitting} type="button" onClick={submitForm}>
              {!isSubmitting && 'Save updates'}
              {isSubmitting && 'Saving...  '}
            </Button>
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  );
};

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  isMainInformation: PropTypes.bool.isRequired,
};

export default UserForm;
