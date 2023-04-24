import React from 'react';

export const ChatMessage = ({ message }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="text-sm font-medium text-gray-700">{message.user}</div>
      <div className="bg-white shadow rounded-lg p-3">
        <div className="text-gray-600">{message.text}</div>
      </div>
    </div>
  );
};
