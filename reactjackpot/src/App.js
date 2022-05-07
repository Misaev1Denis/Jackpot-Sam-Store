import './App.css';
import React from "react";
import "aos/dist/aos.css"
import Header from "./components/header/Header";
import Main from "./components/main content/main";
import Footer from "./components/footer/foot";




class App extends React.Component {
    constructor() {
        super();
        this.state = {
            active : false
        }
    render()
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}

export default App;