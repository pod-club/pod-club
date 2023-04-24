import React from "react";
import Channels from "/home/aisha/Documents/Development/phase5/pod-club/frontend/src/components/assets/icons8-music-library-50.png"
import Logo from "/home/aisha/Documents/Development/phase5/pod-club/frontend/src/components/assets/PodClub__1_-removebg-preview.png"
import Notifications from "/home/aisha/Documents/Development/phase5/pod-club/frontend/src/components/assets/icons8-notification.gif"
import Invite from "/home/aisha/Documents/Development/phase5/pod-club/frontend/src/components/assets/icons8-invite-50.png"
import Footer from "./Footer"

export default function Home(){
	return(
		<>
		<div className="Container">
			<div className="Sidebar">
				<div className="SidebarContent">
					<img src={Logo} className="LogoImage"/>
					<div className="Icons">
					<div className="Content">
							<img src={Channels} className="" />
							<p>Channels</p>
						</div>
					<div className="Content">
							<img src={Notifications} className="" />
							<p>Notifications</p>
						</div>
						<div className="Content">
							<img src={Invite} className="" />
							<p>Invite</p>
						</div>
					</div>
				</div>
			</div>
			<div className="MainContainer">
			   <div className="Footer">
				<p>Start Today</p>
                <Footer/>
			   </div>
			</div>
		</div>
		</>
	)
}