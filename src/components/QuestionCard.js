import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/card.scss';

export default function QuestionCard({ id }) {
  const {
    author,
    optionOne: { text },
  } = useSelector(({ questions }) => questions[id]);
  const { name, avatarURL } = useSelector(({ users }) => users[author]);
  const history = useHistory();

  const goToQuestion = () => {
    history.push(`/questions/${id}`);
  };

  return (
    <div className="card">
      <h4 className="title">{`${name} asks`}</h4>
      <div className="content">
        <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
        <div className="detail">
          <p className="bold">Would you rather</p>
          <p>{`...${text}...`}</p>
          <button type="submit" onClick={goToQuestion}>
            View Question
          </button>
        </div>
      </div>
    </div>
  );
}
