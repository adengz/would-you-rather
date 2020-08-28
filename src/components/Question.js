import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Result from './Result';
import Vote from './Vote';
import NotFound from './NotFound';

export default function Question() {
  const { id } = useParams();
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

  if (notFound) {
    return <NotFound />;
  }

  return typeof answer !== 'undefined' ? (
    <Result {...props} />
  ) : (
    <Vote {...props} />
  );
}
