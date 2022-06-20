import React, { Component } from "react";
import ModalEducationalExp from "./ModalEducationalExp";
import ModalPersonalInfo from "./ModalPersonalInfo";

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

                    <div className="input_values">
                        <ModalPersonalInfo group={personal_info} />
                        <ModalEducationalExp group={educational_experience} />
                    </div>
                </div>
            );
    }
}

export default ModalCv;
