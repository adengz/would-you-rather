import React, { useState } from 'react';
import '../styles/card.scss';
import '../styles/new_question.scss';

const keys = ['optionOneText', 'optionTwoText'];

export default function NewQuestion() {
  const [texts, setTexts] = useState(
    Object.fromEntries(keys.map((k) => [k, '']))
  );

  const handleTypeInput = (e) => {
    setTexts({ ...texts, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h3 className="title">Create New Question</h3>
      <div className="detail">
        <p>Complete the question:</p>
        <div className="bold">Would you rather ...</div>
        {keys
          .map((key) => (
            <input
              type="text"
              name={key}
              value={texts[key]}
              onChange={handleTypeInput}
            />
          ))
          .reduce((prev, curr) => [
            prev,
            <div className="divider">
              <span className="label">OR</span>
            </div>,
            curr,
          ])}
        <button
          type="submit"
          onClick={() => console.log('submit')}
          disabled={Object.values(texts).includes('')}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
