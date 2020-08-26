import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const tabs = ['unanswered', 'answered'];

export default function QuestionList() {
  const allIds = useSelector(({ questions }) =>
    Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  );
  const answeredIds = useSelector(
    ({ authedUser, users }) => new Set(Object.keys(users[authedUser].answers))
  );
  const [activeTab, setActiveTab] = useState('unanswered');
  const filteredIds = allIds.filter((id) =>
    activeTab === 'answered' ? answeredIds.has(id) : !answeredIds.has(id)
  );

  return (
    <div className="list-frame">
      <ul className="tabs">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={tab === activeTab ? 'active' : null}
            onClick={() => setActiveTab(tab)}
          >{`${tab} questions`}</li>
        ))}
      </ul>
      <ul>
        {filteredIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}
