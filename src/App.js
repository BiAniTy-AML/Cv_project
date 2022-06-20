import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";

class App extends Component {
    constructor() {
        super();

        this.handle_input = this.handle_input.bind(this);

        this.state = {
            personal_info: {
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                introduction: "",
            },
            educational_exp: {
                school_name: "",
                study_title: "",
                es_start: "",
                es_end: "",
            },
            practical_exp: {
                company: "",
                position: "",
                tasks: "",
                pr_start: "",
                pr_end: "",
            },
        };
    }

    handle_input(e, classification) {
        const value = e.target.value;
        const input = e.target.name;

        const fields = this.state[classification];

        fields[input] = value;

        this.setState({
            [classification]: fields,
        });
    }

    render() {
        return (
            <div>
                <PersonalInfo
                    handle_input={this.handle_input}
                    fields={this.state.personal_info}
                />
                <EducationalExp
                    handle_input={this.handle_input}
                    fields={this.state.educational_exp}
                />
                <PracticalExp
                    handle_input={this.handle_input}
                    fields={this.state.practical_exp}
                />
                <button type="submit" className="submit_btn" onClick={() => {}}>
                    Confirm
                </button>
            </div>
        );
    }
}

export default App;
