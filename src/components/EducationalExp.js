import React, { Component } from "react";

class EducationalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handle_input, fields, amount } = this.props;
        const classification = "educational_exp";

        const same_fields = [];

        for (let i = 0; i < amount; i++) {
            same_fields.push(
                <div className="ed_exp_container" key={i}>
                    <h1>Educational Experience</h1>
                    <form className="user_ed_exp">
                        <input
                            type="text"
                            placeholder="School name"
                            id="user_school"
                            name={`school_name${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`school_name${i}`] || ""}
                        ></input>

                        <input
                            type="text"
                            placeholder="Title of study"
                            id="user_title_study"
                            name={`study_title${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`study_title${i}`] || ""}
                        ></input>

                        <input
                            type="text"
                            placeholder="Start date"
                            id="user_dtstudy_start"
                            name={`es_start${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`es_start${i}`] || ""}
                        ></input>

                        <input
                            type="text"
                            placeholder="End date"
                            id="user_dtstudy_end"
                            name={`es_end${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`es_end${i}`] || ""}
                        ></input>
                    </form>
                </div>
            );
        }

        return <div>{same_fields}</div>;
    }
}

export default EducationalExp;
