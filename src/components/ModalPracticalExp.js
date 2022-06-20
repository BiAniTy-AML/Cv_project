import React, { Component } from "react";

class ModalPracticalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { group } = this.props;
        return (
            <section className="practical_exp group_section">
                <div className="section_details">
                    <div className="group_section_header">
                        Practical Experience
                    </div>

                    <div className="group_data">
                        <div className="info_wrapper value_cmname">
                            <span>Company name: </span>
                            {group.company}
                        </div>

                        <div className="info_wrapper value_position">
                            <span>Position: </span>
                            {group.position}
                        </div>

                        <div className="info_wrapper value_tasks">
                            <span>Tasks: </span>
                            {group.tasks}
                        </div>

                        <div className="info_wrapper value_duration_job">
                            <span>Duration: </span>
                            {group.pr_start} - {group.pr_end}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ModalPracticalExp;
