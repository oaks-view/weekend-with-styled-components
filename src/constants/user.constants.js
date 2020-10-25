const UPDATE_USER = 'UPDATE_USER';

const COUNTRIES = [
  {
    label: 'Nigeria (NG)',
    value: 'NG',
  },
  {
    label: 'United States (US)',
    value: 'USA',
  },
  {
    label: 'United Kingdom (UK)',
    value: 'UK',
  },
  {
    label: 'Canada (CA)',
    value: 'CA',
  },
  {
    label: 'Germany (DE)',
    value: 'DE',
  },
];

const DEFAULT_USER = {
  email: 'missy@email.com',
  firstName: 'Missy',
  lastName: 'Dreen',
  password: '123456',
  confirmPassword: '123456',
  country: COUNTRIES[0].value,
  address: '12 McNeil road Sabo Yaba',
  photo: '',
};

export { UPDATE_USER, COUNTRIES, DEFAULT_USER };
