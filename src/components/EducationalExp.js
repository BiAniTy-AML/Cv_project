import React, { Component } from "react";

class EducationalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handle_input, fields } = this.props;
        const classification = "educational_exp";

        return (
            <div id="ed_exp_container">
                <h1>Educational Experience</h1>
                <form className="user_ed_exp">
                    <input
                        type="text"
                        placeholder="School name"
                        id="user_school"
                        name="school_name"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.school_name}
                    ></input>

                    <input
                        type="text"
                        placeholder="Title of study"
                        id="user_title_study"
                        name="study_title"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.study_title}
                    ></input>

                    <input
                        type="text"
                        placeholder="Start date"
                        id="user_dtstudy_start"
                        name="es_start"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.es_start}
                    ></input>

                    <input
                        type="text"
                        placeholder="End date"
                        id="user_dtstudy_end"
                        name="es_end"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.es_end}
                    ></input>
                </form>
            </div>
        );
    }
}

export default EducationalExp;
