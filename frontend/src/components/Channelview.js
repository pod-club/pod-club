import React from "react";
import logo from '../components/assets/PodClub__1_-removebg-preview.png';
import Chat from "./Chat/Chat";

function Channelview () {
    return (
        <div class=" min-h-0 flex-1 flex overflow-hidden">
            <div className="Sidebar" style={{ backgroundColor: "#fff", width: "20%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div className="SidebarContent" style={{ margin: "2rem"}}>
                    <img src={logo} className="LogoImage" alt="logo" style={{ width: "80%", marginBottom: "2rem"}}/>  
                </div>
            </div>
            <Chat/>
        </div>
    );
}

export default Channelview;