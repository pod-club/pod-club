import React from "react";
import { Route, Routes } from "react-router-dom";
//import { ChatInterface } from "./components/Chat/Interphase";
import Chat from "./components/Chat/Chat";
//import Invite from "./components/Invite";
// import Channel from "./components/Channel";
// import Channelview from "./components/Channelview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login handleLogin={handleLogin} setUser={setUser}/>} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/Channel" element={<Channel/>}/> */}
        {/* <Route path="/Channelview/:id">
          <Channelview />
        </Route> */}
      
    </Routes>

      {/* <ChatInterface/> */}
      {/* <Chat/> */}
      {/* <Invite/> */}
      {/* <Channel/> */}
      {/* <Channelview/> */}
    </div>
  );
}

export default App;
