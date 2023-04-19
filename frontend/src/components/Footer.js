import React from "react";
import logo from "/home/aisha/Documents/Development/phase5/pod-club/frontend/src/components/assets/PodClub__2_-removebg-preview.png"

export default function Footer(){
    return(
        <div className="Footers">
            <div className="FooterBotom">
                <div className="FooterText">
                    <p>PodClub</p>
                    <img src={logo} className="Lg"/>
                </div>
                <div className="text">
                    <p>Home</p>
                    {/* <a href="/home">Home</a> */}
                    <p>Lorem</p>
                </div>
                <div className="text">
                    <p>About</p>
                    <p>Lorem Impose</p>
                </div>
                <div className="text">
                    <p>Contact Us</p>
                    <p>+254 7123456789</p>
                </div>
                <div className="text">
                    <p>Service</p>
                    <p>Team Work</p>
                </div>
            </div>
            <hr/>
            <div className="FooterBotom">
                <div className="footerBox">
                   <i class="bi bi-youtube"></i>
                   <i class="bi bi-facebook"></i>
                   <i class="bi bi-twitter"></i>
                   <i class="bi bi-linkedin"></i>
                   <i class="bi bi-google"></i>
                </div>
            </div>
        </div>
    )
}