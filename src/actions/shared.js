import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export const handleInitialData = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    const users = await API._getUsers();
    const questions = await API._getQuestions();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  };
};
