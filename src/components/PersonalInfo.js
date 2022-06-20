import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handle_input, fields } = this.props;
        const classification = "personal_info";

        return (
            <div id="p_info_container">
                <h1>Personal Information</h1>
                <form className="user_personal_info">
                    <input
                        type="text"
                        placeholder="First name"
                        id="user_fstname"
                        name="first_name"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.first_name}
                    ></input>

                    <input
                        type="text"
                        placeholder="Last name"
                        id="user_scdname"
                        name="last_name"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.last_name}
                    ></input>

                    <input
                        type="email"
                        placeholder="Email"
                        id="user_email"
                        name="email"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.email}
                    ></input>

                    <input
                        type="tel"
                        placeholder="Phone number"
                        id="user_phone"
                        name="phone_number"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.phone_number}
                    ></input>

                    <textarea
                        id="user_intro"
                        placeholder="Introduce yourself"
                        name="introduction"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.introduction}
                    ></textarea>
                </form>
            </div>
        );
    }
}

export default PersonalInfo;
