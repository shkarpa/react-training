import { createReducer } from 'reduxsauce';

import UsersActions from 'modules/users/users-actions';

const INITIAL_STATE = {
  title: 'React is the best',
  userIds: []
};

const usersLoaded = (state, { userIds }) => ({
  ...state,
  userIds
});

const HANDLERS = {
  [UsersActions.Types.USERS_LOADED]: usersLoaded
};

export default createReducer(INITIAL_STATE, HANDLERS);
