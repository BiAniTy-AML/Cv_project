import React, { Component } from "react";
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

                    <ModalPersonalInfo group={personal_info} />
                </div>
            );
    }
}

export default ModalCv;
