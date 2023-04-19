import React from "react";

import Footer from "./Footer"
function Home() {
    return (
        <div className="ContextNav">
            <div className="contentInfo">
                <div className="contentInfoBox">
                    <div className="contentInfoBoxText">
                        <h1>What Hot this <br /> weekend?</h1>
                      
                        <p>
                            "Lorem ipsum" is a commonly used placeholder text in the design and printing<br /> industries. It is used as filler text to demonstrate the visual effects of <br />different typefaces and layouts without the distraction of meaningful content.
                        </p>
                        <div className="buttons">
                            <button>Get Started</button>
                            <i class="bi bi-share-fill"></i>
                            <i class="bi bi-box-arrow-down"></i>
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