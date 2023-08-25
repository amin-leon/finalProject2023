// MainContent.js
import React from 'react';
import RegistrationForm from './RegistrationForm'; // Adjust the path as needed

const MainContent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-auto">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default MainContent;
