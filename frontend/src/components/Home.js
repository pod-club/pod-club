import React from "react";
import Channels from "./assets/icons8-music-library-50.png";
import Logo from "./assets/PodClub__1_- black.png";
import Invite from "./assets/icons8-invite-50.png";
import logout from "./assets/icons8-log-out-64.png";
import "./Home.css";

function Home() {
  return (
    <div className="Container">
      <div className="Sidebar">
        <div className="SidebarContent">
          <img src={Logo} className="LogoImage" alt="logo" />
          <div className="Icons">
            <div className="Content">
              <a href="/channels">
                <img src={Channels} className="" alt="channels" />
                <p></p>
              </a>
            </div>
            <div className="Content">
              <a href="/invite">
                <img src={Invite} className="" alt="invite" />
                <p></p>
              </a>
            </div>
            <div className="Content">
              <a href="/logout">
                <img src={logout} className="" alt="invite" />
                <p></p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="MainContainer">
        <div className="Tint"></div>
        <div className="Quote">
          <p>'People want their 15 minutes and are <br></br> willing to do anything to get it' <br></br>~ Joe Rogan</p>
          <div className="Button">
            <button>Get Started</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;


