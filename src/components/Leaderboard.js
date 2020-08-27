import React from 'react';
import { useSelector } from 'react-redux';

const getUserScore = (user) =>
  Object.keys(user.answers).length + user.questions.length;

export default function Leaderboard() {
  const sortedUserIds = useSelector(({ users }) =>
    Object.keys(users).sort(
      (a, b) => getUserScore(users[b]) - getUserScore(users[a])
    )
  );

  return (
    <ul className="list">
      {sortedUserIds.map((id) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  );
}
