import React, { Component } from "react";

class EducationalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="ed_exp_container">
                <h1>Educational Experience</h1>
                <form className="user_ed_exp">
                    <input
                        type="text"
                        placeholder="School name"
                        id="user_school"
                    ></input>

                    <input
                        type="text"
                        placeholder="Title of study"
                        id="user_title_study"
                    ></input>

                    <input
                        type="text"
                        placeholder="Start date"
                        id="user_dtstudy_start"
                    ></input>

                    <input
                        type="text"
                        placeholder="End date"
                        id="user_dtstudy_end"
                    ></input>
                </form>
            </div>
        );
    }
}

export default EducationalExp;
