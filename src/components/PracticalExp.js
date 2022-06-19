import React, { Component } from "react";

class PracticalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="pract_exp_container">
                <h1>Practical Experience</h1>
                <form className="user_pract_exp">
                    <input
                        type="text"
                        placeholder="Company name"
                        className="user_company"
                    ></input>

                    <input
                        type="text"
                        placeholder="Position title"
                        className="user_position"
                    ></input>

                    <input
                        type="text"
                        placeholder="Main tasks done at the job"
                        className="user_tasks"
                    ></input>

                    <input
                        type="text"
                        placeholder="Start date"
                        className="user_dtjob_start"
                    ></input>

                    <input
                        type="text"
                        placeholder="End date"
                        className="user_dtjob_end"
                    ></input>
                </form>
            </div>
        );
    }
}

export default PracticalExp;
