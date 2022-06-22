import React, { Component } from "react";

class EducationalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handle_input, fields, amount, change_amount } = this.props;
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

        return (
            <div className="all_edxep">
                {same_fields}
                <div className="form_options">
                    <button
                        className="add_edexp change_amount_btn"
                        onClick={() => change_amount("ed_exp", "+")}
                    >
                        Add
                    </button>
                    <button
                        className="remove_exp change_amount_btn"
                        onClick={() => change_amount("ed_exp", "-")}
                    >
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}

export default EducationalExp;
