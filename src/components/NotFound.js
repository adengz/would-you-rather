import React from 'react';
import '../styles/card.scss';

export default function NotFound() {
  return (
    <div className="card">
      <h3 className="title center">404</h3>
      <div className="centered-box">
        <p>Oops, nothing here...</p>
      </div>
    </div>
  );
}
