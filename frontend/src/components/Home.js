import React from "react";

import Footer from "./Footer"
function Home() {
    return (
        <div className="ContextNav">
            <div className="contentInfo">
                <div className="contentInfoBox">
                    <div className="contentInfoBoxText">
                        <h1>What's Hot this <br /> weekend?</h1>
                      
                        <p>
                            "Lorem ipsum" is a commonly used placeholder text in the design and printing<br /> industries. It is used as filler text to demonstrate the visual effects of <br />different typefaces and layouts without the distraction of meaningful content.
                        </p>
                        <div className="buttons">
                        <button className="button-get-started" style={{padding: "16px 32px", backgroundColor: "#ffffff", border: "none", borderRadius: "32px", color: "#000000", fontSize: "16px", fontWeight: "bold", cursor: "pointer", transition: "background-color 0.2s ease-in-out"}}>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Home;