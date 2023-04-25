import React, { useState } from 'react';
import './Channel.css';
import { Link } from 'react-router-dom';
import logo from '../components/assets/PodClub__1_-removebg-preview.png';
// import Channelview from './Channelview';
// import icon from '../components/assets/icons8-music-library-50.png';

function Channel({name, description, imageUrl, id}) {
  const [channels, setChannels] = useState([]);
  const [newChannelName, setNewChannelName] = useState('');
  const [newChannelDescription, setNewChannelDescription] = useState('');
  const [selectedChannelIndex, setSelectedChannelIndex] = useState(null);

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

  const handleUpdateChannel = (channelIndex, newName, newDescription) => {
    const updatedChannels = [...channels];
    updatedChannels[channelIndex].name = newName;
    updatedChannels[channelIndex].description = newDescription;
    setChannels(updatedChannels);
    setSelectedChannelIndex(null);
  };

  const handleDeleteChannel = (channelIndex) => {
    const updatedChannels = [...channels];
    updatedChannels.splice(channelIndex, 1);
    setChannels(updatedChannels);
  };

  const handleViewChannel = (channelIndex) => {
    const selectedChannel = channels[channelIndex];
    alert(`Name: ${selectedChannel.name}\nDescription: ${selectedChannel.description}`);
  };

  return (
    <div className="Container" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100vh"}}>
      <div className="Sidebar" style={{ backgroundColor: "#fff", width: "20%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div className="SidebarContent" style={{ margin: "2rem"}}>
          <img src={logo} className="LogoImage" alt="logo" style={{ width: "80%", marginBottom: "2rem"}}/>  
        </div>
      </div>
      <div className="Main" style={{ width: "80%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h2 className="channel-heading" style={{textAlign: "center"}}>Group Channels</h2>
          
        <ul className="channel-list" style={{listStyleType: "none", paddingLeft: "0"}}>
          {channels.map((channel, index) => (
            <li key={index} className="channel-item" style={{margin: "1rem"}}>
              {selectedChannelIndex === index ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateChannel(index, e.target.name.value, e.target.description.value);
                }}>
                  <input
                    type="text"
                    className="channel-name-input"
                    name="name"
                    defaultValue={channel.name}
                  />
                  <input
                    type="text"
                    className="channel-description-input"
                    name="description"
                    defaultValue={channel.description}
                  />
                  <button type="submit">Save</button>
                </form>
                ) : (
                  <>
                    <h3 className="channel-name">{channel.name}</h3>
                    <p className="channel-description">{channel.description}</p>
                  </>
                )}
                
                <div className="channel-action-buttons">
                  <Link to={`/Channelview/${index}`}>
                    <button className="channel-button channel-view-button" id='View' onClick={() => handleViewChannel(index)}>
                      View
                    </button>
                  </Link>
                  <button className="channel-button channel-update-button" id='Update' onClick={() => setSelectedChannelIndex(index)}>
                    Update
                  </button>
                  <button className="channel-button channel-delete-button" id='Delete' onClick={() => handleDeleteChannel(index)}>
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
    </div>
  );
}

export default Channel;
