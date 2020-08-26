export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export const setAuthedUser = (userId) => ({
  type: SET_AUTHED_USER,
  userId,
});
