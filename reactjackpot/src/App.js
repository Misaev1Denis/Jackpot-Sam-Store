import logo from './logo.svg';
import React from "react";
import './App.css';
class App extends React.Component
{
  images = process.env.PUBLIC_URL + "/img1/";
  render() {
    return (
        <div>
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
          <section id="cloth" className="cloth">
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
          </section>
          <section className="aboutus">
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
      </section>
    <footer>
      <div className="container4">
        <div className="worktime">
          <h3>WE WORKING 24/7</h3>
        </div>
        <div className="number">
          <h3>0 800 000-000</h3>
        </div>
      </div>
    </footer>
  </div>
  )
  }
}
export default App;