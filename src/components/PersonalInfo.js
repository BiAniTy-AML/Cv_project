import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="p_info_container">
                <h1>Personal Information</h1>
                <form className="user_personal_info">
                    <input
                        type="text"
                        placeholder="First name"
                        id="user_fstname"
                    ></input>
                    <input
                        type="text"
                        placeholder="Last name"
                        id="user_scdname"
                    ></input>
                    <input
                        type="email"
                        placeholder="Email"
                        id="user_email"
                    ></input>
                    <input
                        type="tel"
                        placeholder="Phone number"
                        id="user_phone"
                    ></input>
                    <textarea
                        name=""
                        id="user_intro"
                        placeholder="Introduce yourself"
                    ></textarea>
                </form>
            </div>
        );
    }
}

export default PersonalInfo;
