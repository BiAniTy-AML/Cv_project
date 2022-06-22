import React, { Component } from "react";

class ModalPracticalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { group, amount } = this.props;
        const same_fields = [];

        for (let i = 0; i < amount; i++)
            same_fields.push(
                <div className="section_details">
                    <div className="group_section_header">
                        Practical Experience
                    </div>

                    <div className="group_data">
                        <div className="info_wrapper value_cmname">
                            <span>Company name: </span>
                            {group[`company${i}`]}
                        </div>

                        <div className="info_wrapper value_position">
                            <span>Position: </span>
                            {group[`position${i}`]}
                        </div>

                        <div className="info_wrapper value_tasks">
                            <span>Tasks: </span>
                            {group[`tasks${i}`]}
                        </div>

                        <div className="info_wrapper value_duration_job">
                            <span>Duration: </span>
                            {group[`pr_start${i}`]} - {group[`pr_end${i}`]}
                        </div>
                    </div>
                </div>
            );
        return (
            <section className="practical_exp group_section">
                {same_fields}
            </section>
        );
    }
}

export default ModalPracticalExp;
