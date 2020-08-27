import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../utils/_DATA';
import { receiveUsers, addAnswerToUser, addQuestionToUser } from './users';
import {
  receiveQuestions,
  addAnswerToQuestion,
  addQuestionToQuestions,
} from './questions';

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

export const handleAnswer = ({ qid, answer }) => {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    const data = { authedUser, qid, answer };
    dispatch(showLoading());

    await API._saveQuestionAnswer(data);
    dispatch(addAnswerToUser(data));
    dispatch(addAnswerToQuestion(data));
    dispatch(hideLoading());
  };
};

export const handleNewQuestion = ({ optionOneText, optionTwoText }) => {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    const data = { author: authedUser, optionOneText, optionTwoText };
    dispatch(showLoading());

    const question = await API._saveQuestion(data);
    dispatch(addQuestionToQuestions(question));
    dispatch(addQuestionToUser({ authedUser, qid: question.id }));
    dispatch(hideLoading());
  };
};
