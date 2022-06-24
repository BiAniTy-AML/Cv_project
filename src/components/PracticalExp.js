import React, { useEffect, useState } from "react";

const PracticalExp = (props) => {
    // Function to save input, the form fields of the section,
    // the amount of copy sections and function to add or remove the copied sections
    const { handle_input, fields, amount, change_amount } = props;

    const [same_sections, set_same_sections] = useState([]);

    // The current section
    const classification = "practical_experience";

    useEffect(() => {
        const group = [];
        for (let i = 0; i < amount; i++) {
            group.push(
                <div className="pract_exp_container" key={i}>
                    <h1>Practical Experience</h1>
                    <form className="user_pract_exp">
                        {/* Every input has a number on its value, which serves as and id when saving its content */}
                        <input
                            type="text"
                            placeholder="Company name"
                            className="user_company"
                            name={`company${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`company${i}`] || ""}
                        ></input>

                        <input
                            type="text"
                            placeholder="Position title"
                            className="user_position"
                            name={`position${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`position${i}`] || ""}
                        ></input>

                        <input
                            type="text"
                            placeholder="Main tasks done at the job"
                            className="user_tasks"
                            name={`tasks${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`tasks${i}`] || ""}
                        ></input>

                        <input
                            type="text"
                            placeholder="Start date"
                            className="user_dtjob_start"
                            name={`pr_start${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`pr_start${i}`] || ""}
                        ></input>

                        <input
                            type="text"
                            placeholder="End date"
                            className="user_dtjob_end"
                            name={`pr_end${i}`}
                            onChange={(e) => handle_input(e, classification)}
                            value={fields[`pr_end${i}`] || ""}
                        ></input>
                    </form>
                </div>
            );

            set_same_sections(group);
        }
    }, [amount, fields]);

    return (
        <div className="all_prexp">
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

export default PracticalExp;
