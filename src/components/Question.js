import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    return { id, name, avatarURL, options: { optionOne, optionTwo }, answer };
  });
  const { notFound, answer } = props;

  return typeof answer !== 'undefined' ? (
    <Result {...props} />
  ) : (
    <Vote {...props} />
  );
}

const Vote = ({ id, name, avatarURL, options }) => {
  const [selection, setSelection] = useState('');
  const dispatch = useDispatch();

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
                  checked={selection === k}
                  onChange={() => setSelection(k)}
                />
                {v.text}
              </label>
            </p>
          ))}
          <button
            type="submit"
            onClick={() => console.log('submit answer')}
            disabled={selection === ''}
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
