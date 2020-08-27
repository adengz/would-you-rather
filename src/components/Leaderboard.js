import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const getUserScore = (user) =>
  Object.keys(user.answers).length + user.questions.length;

export default function Leaderboard() {
  const sortedUserIds = useSelector(({ users }) =>
    Object.keys(users).sort(
      (a, b) => getUserScore(users[b]) - getUserScore(users[a])
    )
  );

  return (
    <div className="list">
      {sortedUserIds.map((id) => (
        <UserCard key={id} id={id} />
      ))}
    </div>
  );
}
