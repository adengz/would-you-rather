export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const ADD_QUESTION_TO_QUESTIONS = 'ADD_QUESTION_TO_QUESTIONS';

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

export const addQuestionToQuestions = (question) => ({
  type: ADD_QUESTION_TO_QUESTIONS,
  question,
});
