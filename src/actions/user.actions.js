import { UPDATE_USER } from '../constants';

function updateUser(dispatch) {
  return (user) =>
    dispatch({
      data: user,
      type: UPDATE_USER,
    });
}

export { updateUser };

export default {
  updateUser,
};
