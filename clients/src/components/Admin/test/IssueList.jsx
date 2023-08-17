import React from 'react';

function IssueList({ issues, toggleReadStatus }) {
  return (
    <div className="overflow-x-auto pt-10">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800">
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Status</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {issues.map(issue => (
            <tr key={issue.id} className="border-t">
              <td className="py-2 px-4 border">{issue.title}</td>
              <td className="py-2 px-4 border">{issue.status}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IssueList;
