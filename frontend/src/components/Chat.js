import React, { useState } from 'react';
import './Chat.css';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [imageInput, setImageInput] = useState('');
    const [participants, setParticipants] = useState([]);
    const [reportedUser, setReportedUser] = useState('');
  
    const handleSendMessage = (e, replyTo = null) => {
      e.preventDefault();
  
      if (input) {
        const newMessage = { id: Date.now(), text: input, isImage: false, replyTo };
        setMessages([...messages, newMessage]);
        setInput('');
      }
    };
  
    const handleSendImage = (e) => {
      e.preventDefault();
  
      if (imageInput) {
        const newMessage = { id: Date.now(), text: imageInput, isImage: true };
        setMessages([...messages, newMessage]);
        setImageInput('');
      }
    };
  
    const handleDeleteMessage = (messageId) => {
      const updatedMessages = messages.filter((message) => message.id !== messageId);
      setMessages(updatedMessages);
    };
  
    const handleUpdateMessage = (messageId, newText) => {
      const updatedMessages = messages.map((message) => {
        if (message.id === messageId) {
          return { ...message, text: newText };
        }
        return message;
      });
      setMessages(updatedMessages);
    };
  
    const handleReportUser = (userId) => {
      setReportedUser(userId);
      alert(`User ${userId} has been reported`);
    };
  
    return (
      <div className="container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={message.id} className="message">
              {message.replyTo && (
                <p className="reply-text">{`Replying to ${message.replyTo}`}</p>
              )}
              {message.isImage ? (
                <img src={message.text} alt="message" className="message-image" />
              ) : (
                <p className="message-text">{message.text}</p>
              )}
              <div className="message-actions">
                <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                <button onClick={() => handleUpdateMessage(message.id, "new text")}>Update</button>
                <button onClick={(e) => handleSendMessage(e, message.id)}>Reply</button>
              </div>
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