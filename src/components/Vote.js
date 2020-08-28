import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAnswer } from '../actions/shared';
import '../styles/card.scss';

export default function Vote({ qid, name, avatarURL, options }) {
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
          <h3 className="top">Would you rather ...</h3>
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
}
