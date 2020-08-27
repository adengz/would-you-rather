import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleNewQuestion } from '../actions/shared';
import '../styles/card.scss';
import '../styles/new_question.scss';

const keys = ['optionOneText', 'optionTwoText'];

export default function NewQuestion() {
  const [texts, setTexts] = useState(
    Object.fromEntries(keys.map((k) => [k, '']))
  );
  const dispatch = useDispatch();

  const handleTypeInput = (e) => {
    setTexts({ ...texts, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(handleNewQuestion(texts));
    // go home
  };

  return (
    <div className="card">
      <h3 className="title center">Create New Question</h3>
      <div className="detail">
        <p>Complete the question:</p>
        <div className="bold">Would you rather ...</div>
        {keys
          .map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              value={texts[key]}
              onChange={handleTypeInput}
            />
          ))
          .reduce((prev, curr) => [
            prev,
            <div key={null} className="divider">
              <span className="label">OR</span>
            </div>,
            curr,
          ])}
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={Object.values(texts).includes('')}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
