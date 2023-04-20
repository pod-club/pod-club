import React from "react";
import logo from "/home/amina/development/projects/phase-5/pod-club/frontend/src/components/assets/PodClub__2_-removebg-preview.png"

export default function Footer(){
    return(
        <div className="Footers">
            <div className="FooterBotom">
                <div className="FooterText">
                </div>
            </div>
            <div className="FooterBotom">
            <img src={logo} className="Lg"/>
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