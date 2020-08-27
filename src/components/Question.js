import React from 'react';
import { useSelector } from 'react-redux';
import Result from './Result';
import Vote from './Vote';

export default function Question({ id }) {
  const props = useSelector(({ authedUser, users, questions }) => {
    const question = questions[id];
    if (typeof question === 'undefined') {
      return { notFound: true };
    }

    const { name, avatarURL } = users[question.author];
    const { optionOne, optionTwo } = question;
    const answer = users[authedUser].answers[id];
    return {
      qid: id,
      name,
      avatarURL,
      options: { optionOne, optionTwo },
      answer,
    };
  });
  const { notFound, answer } = props;

  return typeof answer !== 'undefined' ? (
    <Result {...props} />
  ) : (
    <Vote {...props} />
  );
}
