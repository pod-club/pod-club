import React from 'react';

export const UserList = ({ users }) => {
  return (
    <div>
      <div className="text-lg font-medium mb-2">Users in chat:</div>
      {users.map((user, index) => (
        <div key={index} className="text-gray-700">
          {user}
        </div>
      ))}
    </div>
  );
};