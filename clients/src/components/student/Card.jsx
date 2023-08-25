import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
