
const issuesData = [
    {
      _id: 'issue1',
      title: 'Network Connectivity Problem',
      description: 'Users are reporting intermittent network connectivity issues.',
      status: 'open',
      priority: 'high',
      submittedBy: 'user1',
      assignedTo: 'staff1',
      comments: [
        { user: 'user1', text: "I'm experiencing this issue too." },
        { user: 'staff1', text: 'We are investigating the problem.' },
      ],
    },
    {
      _id: 'issue2',
      title: 'Printer Not Working',
      description: 'Printer in Room 203 is not printing any documents.',
      status: 'in-progress',
      priority: 'medium',
      submittedBy: 'user2',
      assignedTo: 'staff2',
      comments: [
        { user: 'user2', text: 'Printer in Room 203 is not working.' },
        { user: 'staff2', text: 'I will check the printer shortly.' },
      ],
    },
    {
      _id: 'issue3',
      title: 'Login Error',
      description: 'Users cannot log in to the system.',
      status: 'closed',
      priority: 'high',
      submittedBy: 'user3',
      assignedTo: 'staff3',
      comments: [
        { user: 'user3', text: 'I cannot log in to the system.' },
        { user: 'staff3', text: 'The issue has been resolved. Users can log in now.' },
      ],
    },
    // Add more issue data here
  ];
  

  export default issuesData