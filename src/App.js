import React, { useState } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";
import ModalCv from "./components/ModalCv";

const App = () => {
    // Controls the modal display
    const [modal_showing, set_modal_showing] = useState(false);

    // The text inside the side button
    const [side_btn_txt, set_side_btn_txt] = useState("Confirm");

    // The errors when submiting the form - helps form validation
    const [form_errors, set_form_errors] = useState({});

    // The first form section
    const [personal_info, set_personal_info] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        introduction: "",
    });

    // The second form section
    const [educational_experience, set_educational_experience] = useState({
        school_name: "",
        study_title: "",
        es_start: "",
        es_end: "",
    });
    const [educational_experience_amount, set_educational_experience_amount] =
        useState(1);

    // The third form section
    const [practical_experience, set_practical_experience] = useState({
        company: "",
        position: "",
        tasks: "",
        pr_start: "",
        pr_end: "",
    });
    const [practical_experience_amount, set_practical_experience_amount] =
        useState(1);

    // Helps dinamically use set state
    const set_fields = {
        personal_info: set_personal_info,
        educational_experience: set_educational_experience,
        practical_experience: set_practical_experience,
    };

    // Saves the user input in the state
    const handle_input = (e, classification) => {
        // What field was changed
        // What the user typed
        const { value, name } = e.target;

        const set_funtion = set_fields[classification];

        set_funtion((prev_state) => {
            return {
                ...prev_state,
                [name]: value,
            };
        });
    };

    // Helps dinamically use set state
    const set_amounts = {
        practical_experience: set_practical_experience_amount,
        educational_experience: set_educational_experience_amount,
    };

    // Adds or removes a similar form section
    const change_amount = (classification, operation, amount) => {
        // Only + and - operations are allowed
        if (!(operation === "+" || operation === "-")) return;

        const set_funtion = set_amounts[classification];

        switch (operation) {
            case "+":
                // Adds 1 to the number of fields
                set_funtion((prev_amount) => prev_amount + 1);
                break;

            case "-":
                // Subtracts 1 to the number of fields
                if (amount > 1) set_funtion((prev_amount) => prev_amount - 1);
                break;

            default:
                break;
        }
    };

    // Submits all form fields and validates them
    // TODO: Implement and actual form validation
    const confirm_data = (e) => {
        e.preventDefault();

        // The sections to be validated
        const p_info = personal_info;
        const ed_exp = educational_experience;
        const pra_exp = practical_experience;

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
        set_form_errors(errors);

        // Only submits if the answers are valid
        // After successfully submitting, open the modal, and
        // if it is already opened, close it to allow editing
        if (is_valid && !modal_showing) {
            set_modal_showing(true);
            set_side_btn_txt("Edit");
        } else if (is_valid && modal_showing) {
            set_modal_showing(false);
            set_side_btn_txt("Confirm");
        }
    };

    return (
        <div>
            {/* All form sections */}
            <PersonalInfo
                fields={educational_experience}
                handle_input={handle_input}
                errors={form_errors}
            />
            <EducationalExp
                fields={educational_experience}
                amount={educational_experience_amount}
                handle_input={handle_input}
                change_amount={change_amount}
                errors={form_errors}
            />
            <PracticalExp
                fields={practical_experience}
                amount={practical_experience_amount}
                handle_input={handle_input}
                change_amount={change_amount}
                errors={form_errors}
            />

            <button type="submit" className="side_btn" onClick={confirm_data}>
                {side_btn_txt}
            </button>

            {/* The modal */}
            <ModalCv
                is_showing={modal_showing}
                all_fields={{
                    personal_info,
                    educational_experience,
                    practical_experience,
                }}
                amounts={{
                    ed_exp: educational_experience_amount,
                    pra_exp: practical_experience_amount,
                }}
            />
        </div>
    );
};

export default App;
