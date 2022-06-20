import React, { Component } from "react";

class ModalEducationalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { group } = this.props;
        return (
            <section className="educational_exp group_section">
                <div className="section_details">
                    <div className="group_section_header">
                        Educational Experience
                    </div>

                    <div className="group_data">
                        <div className="info_wrapper value_sname">
                            <span>School name: </span>
                            {group.school_name}
                        </div>

                        <div className="info_wrapper value_sttitle">
                            <span>Study title: </span>
                            {group.study_title}
                        </div>

                        <div className="info_wrapper value_duration_study">
                            <span>Duration: </span>
                            {group.es_start} - {group.es_end}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ModalEducationalExp;
