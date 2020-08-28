import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const getTrimmedTexts = () =>
    Object.fromEntries(Object.entries(texts).map(([k, v]) => [k, v.trim()]));

  const handleTypeInput = (e) => {
    setTexts({ ...texts, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await dispatch(handleNewQuestion(getTrimmedTexts()));
    history.push('/');
  };

  return (
    <div className="card">
      <h3 className="title center">Create New Question</h3>
      <div className="detail">
        <p className="top">Complete the question:</p>
        <span className="bold">Would you rather ...</span>
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
          disabled={Object.values(getTrimmedTexts()).includes('')}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
