import React from "react";
import { Link, useHistory } from "react-router-dom";
import Channels from "./assets/icons8-music-library-50.png";
import Logo from "./assets/PodClub__1_- black.png";
import Invite from "./assets/icons8-invite-50.png";
import logout from "./assets/icons8-log-out-64.png";
//import Login from "./Login";
import "./Home.css";
import Channel from "./Channel";

function Home() {
    const isLoggedIn = true; // User is logged in
    const history = useHistory();
  
    const handleNewPodcastClick = () => {
      if (isLoggedIn) {
        history.push("/channels");
      } else {
        history.push("/login");
      }
    };
  return (
    <div className="Container">
      <div className="Sidebar">
        <div className="SidebarContent">
          <img src={Logo} className="LogoImage" alt="logo" />
          <div className="Icons">
            <div className="Content">
              <Link to="/channels">
                <img src={Channels} className="" alt="channels" />
                <p></p>
              </Link>
            </div>
            <div className="Content">
              <Link to="/invite">
                <img src={Invite} className="" alt="invite" />
                <p></p>
              </Link>
            </div>
            <div className="Content">
              <Link to="/logout">
                <img src={logout} className="" alt="invite" />
                <p></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="MainContainer">
        <div className="Tint"></div>
        <div className="Quote">
          <p>
            'People want their 15 minutes and are <br></br> willing to do anything to get it' <br></br>~ Joe Rogan
          </p>
          <div className="Button">
            {/* {isLoggedIn && (
              <button onClick={handleNewPodcastClick}>Start a New Podcast</button>
            )} */}
            {!isLoggedIn && (
              <Link to="/login">
                <button>Start a New Podcast</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div>
      {/* <Channel/> */}
      </div>
    </div>
  );
}

export default Home;
