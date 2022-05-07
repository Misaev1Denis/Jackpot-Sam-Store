import React from "react";
import SiteLogo from "./logotype.png";
import GitLogo from "./git.png";
import {ReactComponent as BurgerButton} from "./setings.png";
import InstLogo from "./seti.png";
import EmailLogo from "./email.png";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header">
            <div className="container1">
              <div className="nav">
                <div className="logo">
                  <img src={this.images + "logotype.png"} className="imghead"/>
                </div>
                <div className="setings">
                  <a className="setin" href="#">
                    <img src={this.images + "setings.png"} className="seting"/>
                  </a>
                </div>
                <div className="buttons">
                  <a className="insta mylink" href="https://instagram.com/samjackpot4real" target="_blank" >
                    <img src={this.images + "seti.png"} className="instagram"/>
                  </a>
                  <a className="supp mylink" href="#" target="_blank" >
                    <img src={this.images + "email.png"} className="support"/>
                  </a>
                  <a className="gith mylink" href="https://github.com/Misaev1Denis" target="_blank" >
                    <img src={this.images + "git.png"} className="github"/>
                  </a>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default Header;