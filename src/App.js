import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";

class App extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div>
                <PersonalInfo />
            </div>
        );
    }
}

export default App;
