import React from "react";
import "./SecondContainerContent.css";

class SecondContainerContent extends React.Component {
    render() {
        return (
            <div className="container3">
              <div className="text">
                <div className="message">
                  <div className="about">
                    <div className="about_us">
                      <h1>ABOUT US</h1>
                    </div>
                    <div className="collab">
                      <h1>COLLABORATION WITH</h1>
                    </div>
                  </div>
                  <div className="info">
                    <h3><p>We are the most stylish clothing brand.</p>
                      <p>We are chosen by young people, we are worn by adults.</p>
                      <p>Combining street style, drain, warcore.</p>
                      <p>We give the opportunity to express ourselves briefly and clearly.</p>
                      <p>We spread almost all over the world, making people unique.</p></h3>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default SecondContainerContent;