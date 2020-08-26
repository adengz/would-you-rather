import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAnswer } from '../actions/shared';
import '../styles/card.scss';

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

const Vote = ({ qid, name, avatarURL, options }) => {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const handleSubmitAnswer = () => {
    dispatch(handleAnswer({ qid, answer }));
  };

  return (
    <div className="card">
      <h3 className="title">{`${name} asks`}</h3>
      <div className="content">
        <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
        <div className="detail">
          <p className="bold">Would you rather ...</p>
          {Object.entries(options).map(([k, v]) => (
            <p key={k}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={k}
                  checked={answer === k}
                  onChange={() => setAnswer(k)}
                />
                {v.text}
              </label>
            </p>
          ))}
          <button
            type="submit"
            onClick={handleSubmitAnswer}
            disabled={answer === ''}
          >
            Submit Answer and View Results
          </button>
        </div>
      </div>
    </div>
  );
};

const Result = ({ name, avatarURL, options, answer }) => {
  return <div>Result</div>;
};
