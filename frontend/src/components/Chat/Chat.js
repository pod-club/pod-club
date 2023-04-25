import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [participants, setParticipants] = useState([]);
  const [reportedUser, setReportedUser] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (input) {
      const newMessage = { text: input, isImage: false };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const handleSendImage = (e) => {
    e.preventDefault();

    if (imageInput) {
      const newMessage = { text: imageInput, isImage: true };
      setMessages([...messages, newMessage]);
      setImageInput('');
    }
  };

  const handleReportUser = (userId) => {
    setReportedUser(userId);
    alert(`User ${userId} has been reported`);
  };

  return (
    <div className="container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.isImage ? (
              <img src={message.text} alt="message" className="message-image" />
            ) : (
              <p className="message-text">{message.text}</p>
            )}
          </div>
        ))}
      </div>
      <div className="input-container">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <form onSubmit={handleSendImage}>
          <input
            type="text"
            placeholder="Paste image URL here"
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
          />
          <button type="submit">Send Image</button>
        </form>
      </div>
      <div className="participants">
        <h3>Participants:</h3>
        <ul>
          {participants.map((participant) => (
            <li key={participant.id}>{participant.name}</li>
          ))}
        </ul>
      </div>
      <div className="report">
        <h3>Report a User:</h3>
        <input
          type="text"
          placeholder="User ID"
          value={reportedUser}
          onChange={(e) => setReportedUser(e.target.value)}
        />
        <button onClick={() => handleReportUser(reportedUser)}>Report User</button>
      </div>
    </div>
  );
}

export default Chat;
