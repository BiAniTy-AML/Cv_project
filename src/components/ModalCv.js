import React, { Component } from "react";

class ModalCv extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { is_showing, all_fields } = this.props;
        const { personal_info, educational_experience, practical_experience } =
            all_fields;

        if (is_showing)
            return (
                <div className="modal cv">
                    <div className="img_container">
                        <img className="pfpic" src="" alt="" />
                    </div>

                    <section className="personal_info field_section">
                        <div className="section_details">
                            <div className="field_section_header">
                                Personal Information
                            </div>

                            <div className="field_data">
                                <div className="info_wrapper">
                                    <div className="info_name">Full name:</div>
                                    <div className="info_name_value">
                                        {personal_info.first_name}{" "}
                                        {personal_info.last_name}
                                    </div>
                                </div>

                                <div className="info_wrapper">
                                    <div className="info_email">
                                        Email address:
                                    </div>
                                    <div className="info_email_value">
                                        {personal_info.email}
                                    </div>
                                </div>

                                <div className="info_wrapper">
                                    <div className="info_phone">
                                        Phone number:
                                    </div>
                                    <div
                                        className="info_phone_value
                                   "
                                    >
                                        {personal_info.phone_number}
                                    </div>
                                </div>

                                <div className="info_wrapper">
                                    <div className="info_intro">
                                        Brief introduction:
                                    </div>
                                    <div
                                        className="info_phone_value
                                   "
                                    >
                                        {personal_info.introduction}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
    }
}

export default ModalCv;
