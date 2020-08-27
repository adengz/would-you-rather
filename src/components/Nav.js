import React from 'react';
import { useLocation, NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const routes = {
  '/': 'Home',
  '/add': 'New Question',
  '/leaderboard': 'Leaderboard',
};

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="nav-bar">
      {Object.entries(routes).map(([k, v]) => (
        <NavLink key={k} className={pathname === k ? 'active' : null} to={k}>
          {v}
        </NavLink>
      ))}
    </nav>
  );
};

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
      <div>Hello, {name}</div>
      <img src={avatarURL} alt={`${name}'s avatar`} />
      <button type="submit" onClick={handleSignOut}>
        Sign Out
      </button>
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
