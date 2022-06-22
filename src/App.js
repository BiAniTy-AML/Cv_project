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
        this.change_amount = this.change_amount.bind(this);
        this.confirm_data = this.confirm_data.bind(this);

        this.state = {
            // Controls the modal display
            modal_is_showing: false,
            // The text inside the side button
            side_btn_text: "Confirm",
            // The errors when submiting the form - helps form validation
            errors: {},
            // The first form section
            personal_info: {
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                introduction: "",
            },
            // How many of that section are there
            ed_exp_amount: 1,
            // The second form section
            educational_exp: {
                school_name: "",
                study_title: "",
                es_start: "",
                es_end: "",
            },
            pra_exp_amount: 1,
            // The third form section
            practical_exp: {
                company: "",
                position: "",
                tasks: "",
                pr_start: "",
                pr_end: "",
            },
        };
    }

    // Saves the user input in the state
    handle_input(e, classification) {
        // What the user typed
        const value = e.target.value;
        // What field was changed
        const input = e.target.name;

        // Copies the fields from the state
        const fields = this.state[classification];
        // Then adds a new key and value or change it if it already exists
        fields[input] = value;

        // Save the changes to state
        this.setState({
            [classification]: fields,
        });
    }

    // Adds or removes a form field
    change_amount(classification, operation) {
        // Only + and - operations are allowed
        if (!(operation === "+" || operation === "-")) return;
        classification = `${classification}_amount`;

        switch (operation) {
            case "+":
                // Adds 1 to the number of fields
                this.setState({
                    [classification]: this.state[classification] + 1,
                });
                break;

            case "-":
                // Subtracts 1 to the number of fields
                if (this.state[classification] > 1)
                    this.setState({
                        [classification]: this.state[classification] - 1,
                    });
                break;

            default:
                break;
        }
    }

    // Submits all form fields and validates them
    // TODO: Implement and actual form validation
    confirm_data(e) {
        e.preventDefault();

        // The sections to be validated
        const p_info = this.state.personal_info;
        const ed_exp = this.state.educational_exp;
        const pra_exp = this.state.practical_exp;

        let errors = {};
        // Whether the form can be submited or not
        let is_valid = true;

        // Guarantees that every input in the section is filled
        for (const field in p_info) {
            if (!p_info[field].trim()) {
                is_valid = false;
                errors[field] = "*This field must be filled";
            }
        }

        // Saves the errors to the state
        this.setState({
            errors,
        });

        // Only submits if the answers are valid
        // After successfully submitting, open the modal, and
        // if it is already opened, close it to allow editing
        if (is_valid && !this.state.modal_is_showing) {
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
                {/* All form sections */}
                <PersonalInfo
                    handle_input={this.handle_input}
                    fields={this.state.personal_info}
                    errors={this.state.errors}
                />
                <EducationalExp
                    amount={this.state.ed_exp_amount}
                    change_amount={this.change_amount}
                    handle_input={this.handle_input}
                    fields={this.state.educational_exp}
                    errors={this.state.errors}
                />
                <PracticalExp
                    amount={this.state.pra_exp_amount}
                    change_amount={this.change_amount}
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

                {/* The modal */}
                <ModalCv
                    is_showing={this.state.modal_is_showing}
                    all_fields={{
                        personal_info: this.state.personal_info,
                        educational_experience: this.state.educational_exp,
                        practical_experience: this.state.practical_exp,
                    }}
                    amounts={{
                        ed_exp: this.state.ed_exp_amount,
                        pra_exp: this.state.pra_exp_amount,
                    }}
                />
            </div>
        );
    }
}

export default App;
