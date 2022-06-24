import React from "react";
import ModalEducationalExp from "./ModalEducationalExp";
import ModalPersonalInfo from "./ModalPersonalInfo";
import ModalPracticalExp from "./ModalPracticalExp";

const ModalCv = (props) => {
    // Whether the modal is showing, all the sections inside the modal
    // and how many of those sections
    const { is_showing, all_fields, amounts } = props;

    // Separating all the sections
    const { personal_info, educational_experience, practical_experience } =
        all_fields;

    // Only renders if it should
    if (is_showing)
        return (
            <div className="modal cv">
                <div className="img_container">
                    {/* Photo by <a href="https://unsplash.com/@samimatias?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sami Takarautio</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                     */}
                    <img
                        className="pfpic"
                        src="https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt=""
                    />
                </div>

                {/* Shows all the information saved */}
                <div className="input_values">
                    {/* The sections and how many of each */}
                    <ModalPersonalInfo group={personal_info} />
                    <ModalEducationalExp
                        group={educational_experience}
                        amount={amounts.ed_exp}
                    />
                    <ModalPracticalExp
                        group={practical_experience}
                        amount={amounts.pra_exp}
                    />
                </div>
            </div>
        );
};

export default ModalCv;
