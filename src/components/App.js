import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import QuestionList from './QuestionList';
import Question from './Question';

export default function App() {
  const dispatch = useDispatch();
  const authed = useSelector(({ authedUser }) => authedUser !== null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <LoadingBar />
      <div className="container">{authed ? <Question id="vthrdm985a262al8qx3do" /> : <Login />}</div>
    </>
  );
}
