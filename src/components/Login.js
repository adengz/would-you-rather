import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/card.scss';

export default function Login() {
  const allUsers = useSelector(({ users }) => users);
  const [userId, setUserId] = useState('');

  const handleSelectProfile = (e) => {
    setUserId(e.target.value);
  };

  let avatar = <div className="avatar" />;
  if (userId !== '') {
    const { avatarURL, name } = allUsers[userId];
    avatar = (
      <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
    );
  }

  return (
    <div className="card">
      <h3 className="title center">Welcome to the Would You Rather App!</h3>
      <div className="content">
        {avatar}
        <div className="detail">
          <p className="center">Please sign in to continue</p>
          <select value={userId} onChange={handleSelectProfile}>
            <option value="" disabled>
              Select Profile
            </option>
            {Object.values(allUsers).map((user) => {
              const { id, name } = user;
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
          <button
            type="submit"
            onClick={() => console.log('sign in')}
            disabled={userId === ''}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
