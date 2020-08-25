import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <>
      <LoadingBar />
      <div>Hello World</div>
    </>
  );
}
