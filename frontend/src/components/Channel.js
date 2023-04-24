import React, { useState } from 'react';
import './Channel.css';

function Channel() {
  const [channels, setChannels] = useState([]);
  const [newChannelName, setNewChannelName] = useState('');
  const [newChannelDescription, setNewChannelDescription] = useState('');
  const [selectedChannelIndex, setSelectedChannelIndex] = useState(null);
  const [editingName, setEditingName] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);

  const handleCreateChannel = (e) => {
    e.preventDefault();

    if (!newChannelName || !newChannelDescription) {
      alert('Please provide a name and description for the channel');
      return;
    }

    if (channels.length < 5) {
      const newChannel = { name: newChannelName, description: newChannelDescription };
      setChannels([...channels, newChannel]);
      setNewChannelName('');
      setNewChannelDescription('');
    } else {
      alert('You cannot create more than 5 channels');
    }
  };

  const handleUpdateChannelName = (channelIndex, newName) => {
    const updatedChannels = [...channels];
    updatedChannels[channelIndex].name = newName;
    setChannels(updatedChannels);
    setSelectedChannelIndex(null);
    setEditingName(false);
  };

  const handleUpdateChannelDescription = (channelIndex, newDescription) => {
    const updatedChannels = [...channels];
    updatedChannels[channelIndex].description = newDescription;
    setChannels(updatedChannels);
    setSelectedChannelIndex(null);
    setEditingDescription(false);
  };

  const handleDeleteChannel = (channelIndex) => {
    const updatedChannels = [...channels];
    updatedChannels.splice(channelIndex, 1);
    setChannels(updatedChannels);
  };

  const handleInvite = (channelName) => {
    // Implement your invite logic here, e.g. sending invite links to the server
    console.log(`Invite sent for ${channelName}`);
  };

  return (
    <div className="channel-container">
      <h2 className="channel-heading">Group Channels</h2>
      <ul className="channel-list">
        {channels.map((channel, index) => (
          <li key={index} className="channel-item" onClick={() => handleChannelClick(index)}>
            <h3 className="channel-name">{channel.name}</h3>
            {selectedChannelIndex === index ? (
              <input
                type="text"
                className="channel-description-input"
                value={channel.description}
                onChange={(e) => handleUpdateChannel(index, e.target.value)}
              />
            ) : (
              <p className="channel-description">{channel.description}</p>
            )}
            <div className="channel-action-buttons">
              <button className="channel-button channel-invite-button" onClick={() => handleInvite(channel.name)}>
                Invite
              </button>
              <button className="channel-button channel-update-button" onClick={() => setSelectedChannelIndex(index)}>
                Update
              </button>
              <button className="channel-button channel-delete-button" onClick={() => handleDeleteChannel(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form className="channel-form" onSubmit={handleCreateChannel}>
        <label className="channel-label" htmlFor="channelName">
          Name:
        </label>
        <input
          type="text"
          id="channelName"
          className="channel-input channel-name-input"
          value={newChannelName}
          onChange={(e) => setNewChannelName(e.target.value)}
        />
        <label className="channel-label" htmlFor="channelDescription">
          Description:
        </label>
        <input
          type="text"
          id="channelDescription"
          className="channel-input channel-description-input"
          value={newChannelDescription}
          onChange={(e) => setNewChannelDescription(e.target.value)}
        />
        <button className="channel-button channel-create-button" type="submit">
          Create Channel
        </button>
      </form>
    </div>
  );
}

export default Channel;
