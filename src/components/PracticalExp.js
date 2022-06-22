import React, { Component } from "react";

class PracticalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handle_input, fields, amount, change_amount } = this.props;
        const classification = "practical_exp";

        const same_fields = [];

        for (let i = 0; i < amount; i++) {
            same_fields.push(
                <div className="pract_exp_container" key={i}>
                    <h1>Practical Experience</h1>
                    <form className="user_pract_exp">
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
        }

        return (
            <div className="all_prexp">
                {same_fields}

                <div className="form_options">
                    <button
                        className="add_edexp change_amount_btn"
                        onClick={() => change_amount("pra_exp", "+")}
                    >
                        Add
                    </button>
                    <button
                        className="remove_exp change_amount_btn"
                        onClick={() => change_amount("pra_exp", "-")}
                    >
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}

export default PracticalExp;
