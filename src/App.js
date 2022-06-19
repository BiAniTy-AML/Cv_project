import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";

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
                <PracticalExp />
            </div>
        );
    }
}

export default App;
