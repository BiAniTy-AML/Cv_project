import React, { useState, useEffect } from "react";

const EducationalExp = (props) => {
    // Function to save input, the form fields of the section,
    // the amount of copy sections and function to add or remove the copied sections
    const { handle_input, fields, amount, change_amount } = props;

    const [same_sections, set_same_sections] = useState([]);
    const classification = "educational_experience";

    useEffect(() => {
        let group = [];
        for (let i = 0; i < amount; i++) {
            group.push(
                <div className="ed_exp_container" key={i}>
                    <h1>Educational Experience</h1>
                    <form className="user_ed_exp">
                        {/* Every input has a number on its value, which serves as and id when saving its content */}
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

        set_same_sections(group);
    }, [amount, fields]);

    return (
        <div className="all_edxep">
            {same_sections}

            {/* All the equal sections and the buttons to add or remove them */}
            <div className="form_options">
                <button
                    className="add_edexp change_amount_btn"
                    onClick={() => change_amount(classification, "+", amount)}
                >
                    Add
                </button>
                <button
                    className="remove_exp change_amount_btn"
                    onClick={() => change_amount(classification, "-", amount)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default EducationalExp;
