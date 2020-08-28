import React, { useEffect } from 'react';
import { useLocation, Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Login from './Login';
import QuestionList from './QuestionList';
import Question from './Question';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default function App() {
  const dispatch = useDispatch();
  const authed = useSelector(({ authedUser }) => authedUser !== null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <LoadingBar />
      {authed && <Nav />}
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/"
            exact
            component={QuestionList}
            authed={authed}
          />
          <PrivateRoute
            path="/questions/:id"
            component={Question}
            authed={authed}
          />
          <PrivateRoute path="/add" component={NewQuestion} authed={authed} />
          <PrivateRoute
            path="/leaderboard"
            component={Leaderboard}
            authed={authed}
          />
          <PrivateRoute path="*" component={NotFound} authed={authed} />
        </Switch>
      </div>
    </>
  );
}
