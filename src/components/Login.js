import React, { useState } from 'react';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import '../styles/card.scss';

export default function Login() {
  const authed = useSelector(({ authedUser }) => authedUser !== null);
  const allUsers = useSelector(({ users }) => users);
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  if (authed) {
    return <Redirect to="/" />;
  }

  const handleSelectProfile = (e) => {
    setUserId(e.target.value);
  };

  const handleSignIn = () => {
    dispatch(setAuthedUser(userId));
    const { from } = location.state || { from: { pathname: '/' } };
    history.replace(from);
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
          <p className="top center">Please sign in to continue</p>
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
          <button type="submit" onClick={handleSignIn} disabled={userId === ''}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
