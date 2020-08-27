import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import '../styles/nav.scss';

const routes = {
  '/': 'Home',
  '/add': 'New Question',
  '/leaderboard': 'Leaderboard',
};

const NavBar = () => (
  <nav className="nav-bar">
    {Object.entries(routes).map(([k, v]) => (
      <NavLink key={k} activeClassName="active" exact to={k}>
        {v}
      </NavLink>
    ))}
  </nav>
);

const AuthPortal = () => {
  const { name, avatarURL } = useSelector(
    ({ authedUser, users }) => users[authedUser]
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    dispatch(setAuthedUser(null));
    history.push('/');
  };

  return (
    <div className="auth-portal">
      <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
      <div>
        <div>{name}</div>
        <button type="submit" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default function Nav() {
  return (
    <div className="header">
      <NavBar />
      <AuthPortal />
    </div>
  );
}
