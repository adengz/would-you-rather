export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const addAnswerToUser = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_USER,
  authedUser,
  qid,
  answer,
});

export const addQuestionToUser = ({ authedUser, qid }) => ({
  type: ADD_QUESTION_TO_USER,
  authedUser,
  qid,
});
