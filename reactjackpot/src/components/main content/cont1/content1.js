import React from "react";
import "./FirstContainerContent.css";
import Skirt from "./shmot 1.png";
import Hoodi from "./hoodi.png";
import VD from "./VALENTINE'S DAY.png";
import Collection from "./collection.png";

class FirstContainerContent extends React.Component {
    render() {
        return (
            <div className="container2">
              <div className="content">
                <div className="colection">
                  <a className="ski" href="#">
                    <img src={this.images + "shmot 1.png"} className="skirt"/>
                  </a>
                  <a className="hoo" href="#">
                    <img src={this.images + "hoodi.png"} className="hood"/>
                  </a>
                  <div className="colectionname">
                    <img src={this.images + "VALENTINE'S DAY.png"} className="first"/>
                    <img src={this.images + "collection.png"} className="second"/>
                  </div>
                </div>

              </div>
            </div>
        )
    }
}

export default FirstContainerContent;