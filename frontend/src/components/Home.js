import React from "react";
import Channels from "./assets/icons8-music-library-50.png";
import Logo from "./assets/PodClub__1_- black.png";
import Notifications from "./assets/icons8-notification.gif";
import Invite from "./assets/icons8-invite-50.png";
//import "./Home";
//import Footer from "./Footer";


function Home(){
	return(
		
		<div className="Container" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100vh"}}>

            <div className="Sidebar" style={{ backgroundColor: "#fff", width: "20%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div className="SidebarContent" style={{ margin: "2rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                    <img src={Logo} className="LogoImage" alt="logo" style={{ width: "80%", marginBottom: "2rem"}}/>
                    <div className="Icons" style={{ display: "flex", flexDirection: "column"}}>
                        <div className="Content" style={{ display: "flex", alignItems: "center", marginBottom: "2rem"}}>
                            <img src={Channels} className="" alt="channels" style={{ width: "30px", marginRight: "1rem"}}/>
                            <p style={{ margin: "0"}}>Channels</p>
                        </div>
                        <div className="Content" style={{ display: "flex", alignItems: "center", marginBottom: "2rem"}}>
                            <img src={Notifications} className="" alt="notifications" style={{ width: "30px", marginRight: "1rem"}}/>
                            <p style={{ margin: "0"}}>Notifications</p>
                        </div>
                        <div className="Content" style={{ display: "flex", alignItems: "center", marginBottom: "2rem"}}>
                            <img src={Invite} className="" alt="invite" style={{ width: "30px", marginRight: "1rem"}}/>
                            <p style={{ margin: "0"}}>Invite</p>
                        </div>
                    </div>
                </div>
            </div>


			{/* <div className="MainContainer" style={{ width: "80%", height: "100vh", backgroundColor: "#F5F5F5"}}>
			   <div className="Footer" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10%", backgroundColor: "transparent"}}>
				    <p style={{ margin: "0", fontSize: "1.5rem", fontWeight: "bold", color: "white"}}>Start Today</p> 
			   </div>
			</div> */}
            {/* <Footer/> */}
		</div>
		
	);
}

export default Home;