import React, { useState } from "react";
import "./Invite.css";

function Invite() {
  const [inviteEmails, setInviteEmails] = useState("");
  const [inviteMessage, setInviteMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send invite emails to server or API
    console.log(`Invite emails: ${inviteEmails}`);
    console.log(`Invite message: ${inviteMessage}`);
  };

  return (
    <div className="invite-container">
      <h2 className="invite-heading">Invite people to join your channel</h2>
      <form onSubmit={handleSubmit} className="invite-form">
        <div className="invite-input-container">
          <label htmlFor="emails" className="invite-label">
            Email addresses:
          </label>
          <input
            type="text"
            id="emails"
            value={inviteEmails}
            onChange={(e) => setInviteEmails(e.target.value)}
            className="invite-input"
          />
        </div>
        <div className="invite-input-container">
          <label htmlFor="message" className="invite-label">
            Message:
          </label>
          <textarea
            id="message"
            value={inviteMessage}
            onChange={(e) => setInviteMessage(e.target.value)}
            className="invite-textarea"
          />
        </div>
        <button type="submit" className="invite-button">
          Send Invites
        </button>
      </form>
    </div>
  );
}

export default Invite;
