import React, { useState } from 'react';
import IssueNavBar from './IssueButtons';
import IssueList from './IssueList';
import issuesData from '../issueData'

function MainComponent() {
    const toggleReadStatus = (id) => {
        setIssues(prevIssues =>
          prevIssues.map(issue =>
            issue.id === id ? { ...issue, isRead: !issue.isRead } : issue
          )
        );
      };
  const [issues, setIssues] = useState(issuesData);


  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const filteredIssues = selectedStatus === 'all'
    ? issues
    : issues.filter(issue => issue.status === selectedStatus);

  return (
    <div>
      <IssueNavBar onSelect={handleStatusSelect} selectedStatus={selectedStatus} />
      <IssueList issues={filteredIssues} toggleReadStatus={toggleReadStatus} />
    </div>
  );
}

export default MainComponent;
