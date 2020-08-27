import React from 'react';
import '../styles/card.scss';
import '../styles/result.scss';

export default function Result({ name, avatarURL, options, answer }) {
  const totalVotes = Object.values(options)
    .map((o) => o.votes.length)
    .reduce((a, b) => a + b);
  const data = {};
  Object.entries(options).forEach(([k, v]) => {
    const { votes, text } = v;
    const { length } = votes;
    data[k] = {
      text,
      votes: length,
      percent: (length / totalVotes) * 100,
    };
  });

  return (
    <div className="card">
      <h3 className="title">{`Asked by ${name}`}</h3>
      <div className="content">
        <img className="avatar" src={avatarURL} alt={`${name}'s avatar`} />
        <div className="detail">
          <p className="bold">Result</p>
          <p>Vote Bar</p>
          {Object.entries(data).map(([k, v]) => (
            <p key={k} className={`option${k === answer ? ' mine' : ''}`}>
              {v.votes} / {totalVotes} ({v.percent}%) would rather {v.text}
              {k === answer && (
                <div className="badge">
                  Your
                  <br />
                  Choice
                </div>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
