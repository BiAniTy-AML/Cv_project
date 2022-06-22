import React, { Component } from "react";

class PracticalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handle_input, fields, amount } = this.props;
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

        return <div>{same_fields}</div>;
    }
}

export default PracticalExp;
