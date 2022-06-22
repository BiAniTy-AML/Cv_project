import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Function to save the user input, the form fields of each section and the form errors
        const { handle_input, fields, errors } = this.props;
        // The current form section
        const classification = "personal_info";

        return (
            <div id="p_info_container">
                <h1>Personal Information</h1>
                <form className="user_personal_info">
                    {/* Every input has the function to save its contents and an error div to display what went wrong */}
                    <input
                        required
                        type="text"
                        placeholder="First name"
                        id="user_fstname"
                        name="first_name"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.first_name}
                    ></input>
                    <div className="error_msg">{errors.first_name}</div>

                    <input
                        required
                        type="text"
                        placeholder="Last name"
                        id="user_scdname"
                        name="last_name"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.last_name}
                    ></input>
                    <div className="error_msg">{errors.last_name}</div>

                    <input
                        required
                        type="email"
                        placeholder="Email"
                        id="user_email"
                        name="email"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.email}
                    ></input>
                    <div className="error_msg">{errors.email}</div>

                    <input
                        required
                        type="tel"
                        placeholder="Phone number"
                        id="user_phone"
                        name="phone_number"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.phone_number}
                    ></input>
                    <div className="error_msg">{errors.phone_number}</div>

                    <textarea
                        required
                        id="user_intro"
                        placeholder="Introduce yourself"
                        name="introduction"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.introduction}
                    ></textarea>
                    <div className="error_msg">{errors.introduction}</div>
                </form>
            </div>
        );
    }
}

export default PersonalInfo;
