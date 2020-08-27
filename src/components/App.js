import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
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
      <div className="container">{authed ? <Leaderboard /> : <Login />}</div>
    </>
  );
}
