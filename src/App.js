import React, { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";
import ModalCv from "./components/ModalCv";

class App extends Component {
    constructor() {
        super();

        this.handle_input = this.handle_input.bind(this);
        this.confirm_data = this.confirm_data.bind(this);

        this.state = {
            modal_is_showing: false,
            side_btn_text: "Confirm",
            errors: {},
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

    confirm_data(e) {
        e.preventDefault();

        const p_info = this.state.personal_info;
        const ed_exp = this.state.educational_exp;
        const pra_exp = this.state.practical_exp;

        let errors = {};
        let is_valid = true;

        for (const field in p_info) {
            if (!p_info[field].trim()) {
                is_valid = false;
                errors[field] = "*This field must be filled";
            }
        }

        this.setState({
            errors,
        });

        if (is_valid && !this.state.modal_is_showing) {
            console.log("congrats!!!");
            this.setState({
                modal_is_showing: true,
                side_btn_text: "Edit",
            });
        } else if (is_valid && this.state.modal_is_showing) {
            this.setState({
                modal_is_showing: false,
                side_btn_text: "Confirm",
            });
        }
    }

    render() {
        return (
            <div>
                <PersonalInfo
                    handle_input={this.handle_input}
                    fields={this.state.personal_info}
                    errors={this.state.errors}
                />
                <EducationalExp
                    handle_input={this.handle_input}
                    fields={this.state.educational_exp}
                    errors={this.state.errors}
                />
                <PracticalExp
                    handle_input={this.handle_input}
                    fields={this.state.practical_exp}
                    errors={this.state.errors}
                />
                <button
                    type="submit"
                    className="side_btn"
                    onClick={this.confirm_data}
                >
                    {this.state.side_btn_text}
                </button>
                <ModalCv
                    is_showing={this.state.modal_is_showing}
                    all_fields={{
                        personal_info: this.state.personal_info,
                        educational_experience: this.state.educational_exp,
                        practical_experience: this.state.practical_exp,
                    }}
                />
            </div>
        );
    }
}

export default App;
