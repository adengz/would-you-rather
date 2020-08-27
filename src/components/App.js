import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Login from './Login';
import QuestionList from './QuestionList';
import Question from './Question';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

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
        {!authed ? (
          <Route path="/login" component={Login} />
        ) : (
          <Switch>
            <Route path="/" exact component={QuestionList} />
            <Route path="/questions/:id" component={Question} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={Leaderboard} />
          </Switch>
        )}
      </div>
    </>
  );
}
