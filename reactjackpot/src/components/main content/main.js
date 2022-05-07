import React from "react";
import FirstContent from "./cont1/content1.js";
import SecondContent from "./cont2/content2.js";
import "./main.css";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <FirstContent />
                <SecondContent />
            </div>
        )
    }
}

export default Main;