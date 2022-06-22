import React, { Component } from "react";

class PracticalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handle_input, fields } = this.props;
        const classification = "practical_exp";

        return (
            <div className="pract_exp_container">
                <h1>Practical Experience</h1>
                <form className="user_pract_exp">
                    <input
                        type="text"
                        placeholder="Company name"
                        className="user_company"
                        name="company"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.company}
                    ></input>

                    <input
                        type="text"
                        placeholder="Position title"
                        className="user_position"
                        name="position"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.position}
                    ></input>

                    <input
                        type="text"
                        placeholder="Main tasks done at the job"
                        className="user_tasks"
                        name="tasks"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.tasks}
                    ></input>

                    <input
                        type="text"
                        placeholder="Start date"
                        className="user_dtjob_start"
                        name="pr_start"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.pr_start}
                    ></input>

                    <input
                        type="text"
                        placeholder="End date"
                        className="user_dtjob_end"
                        name="pr_end"
                        onChange={(e) => handle_input(e, classification)}
                        value={fields.pr_end}
                    ></input>
                </form>
            </div>
        );
    }
}

export default PracticalExp;
