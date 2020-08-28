import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/user_card.scss';

export default function UserCard({ id }) {
  const user = useSelector(({ users }) => users[id]);
  const { avatarURL, name } = user;
  const answered = Object.keys(user.answers).length;
  const created = user.questions.length;
  const score = answered + created;

  return (
    <div className="card-frame">
      <div className="content">
        <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
        <div className="detail">
          <p className="bold">{name}</p>
          <div className="stats">
            <span>Answered questions</span>
            <span>{answered}</span>
          </div>
          <hr />
          <div className="stats">
            <span>Created questions</span>
            <span>{created}</span>
          </div>
        </div>
        <div className="score">
          <div className="card-frame">
            <h4 className="title center">Score</h4>
            <div className="centered-box">
              <div className="badge">{score}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
