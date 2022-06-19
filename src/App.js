import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationalExp from "./components/EducationalExp";

class App extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div>
                <PersonalInfo />
                <EducationalExp />
            </div>
        );
    }
}

export default App;
