export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const addAnswerToQuestion = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_QUESTION,
  authedUser,
  qid,
  answer,
});
