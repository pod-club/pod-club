import React, { useState, useEffect } from 'react';
import { ChatMessage } from '../Chat/Message';
import { ChatInput } from '../Chat/Input';
import { UserList } from '../Chat/Userlist';

export const ChatInterface = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on('chat message', (msg) => {
        setMessages([...messages, msg]);
      });
  
      socket.on('users', (users) => {
        setUsers(users);
      });
    }
  }, [messages, socket]);

  return (
    <div className="flex h-screen">
      <div className="w-3/4 bg-gray-200 p-4">
        <div className="h-4/5 overflow-y-scroll">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <ChatInput socket={socket} />
      </div>
      <div className="w-1/4 bg-gray-100 p-4">
        <UserList users={users} />
      </div>
    </div>
  );
};
