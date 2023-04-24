import React, { useState } from 'react';

export const ChatInput = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chat message', { text: message });
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message here..."
        className="w-full rounded-lg border-gray-300 p-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};
