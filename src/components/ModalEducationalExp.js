import React, { Component } from "react";

class ModalEducationalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { group, amount } = this.props;
        const same_fields = [];

        for (let i = 0; i < amount; i++) {
            same_fields.push(
                <div className="section_details">
                    <div className="group_section_header">
                        Educational Experience
                    </div>

                    <div className="group_data">
                        <div className="info_wrapper value_sname">
                            <span>School name: </span>
                            {group[`school_name${i}`]}
                        </div>

                        <div className="info_wrapper value_sttitle">
                            <span>Study title: </span>
                            {group[`study_title${i}`]}
                        </div>

                        <div className="info_wrapper value_duration_study">
                            <span>Duration: </span>
                            {group[`es_start${i}`]} - {group[`es_end${i}`]}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <section className="educational_exp group_section">
                {same_fields}
            </section>
        );
    }
}

export default ModalEducationalExp;
