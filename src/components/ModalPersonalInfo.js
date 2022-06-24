import React from "react";

const ModalPersonalInfo = (props) => {
    // The group it belongs (personal_info)
    const { group } = props;

    return (
        <section className="personal_info group_section">
            <div className="section_details">
                <div className="group_section_header">Personal Information</div>

                <div className="group_data">
                    <div className="info_wrapper value_name">
                        <span>Full name: </span>
                        {group.first_name} {group.last_name}
                    </div>

                    <div className="info_wrapper value_phone">
                        <span>Phone number: </span>
                        {group.phone_number}
                    </div>

                    <div className="info_wrapper value_email">
                        <span>Email address: </span>
                        {group.email}
                    </div>

                    <div className="info_wrapper value_intro">
                        <span>Brief introduction: </span>
                        {group.introduction}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModalPersonalInfo;
