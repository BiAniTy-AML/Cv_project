import React from "react";

const ModalEducationalExp = (props) => {
    // The group it belongs (educational_experience) and how many sections
    const { group, amount } = props;
    // It is here to help in dynamically generating the sections
    const same_fields = [];

    // Generates all the sections
    for (let i = 0; i < amount; i++) {
        same_fields.push(
            <div className="section_details" key={i}>
                <div className="group_section_header">
                    Educational Experience
                </div>

                {/* Each div shows the information based on the "id" */}
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
};

export default ModalEducationalExp;
