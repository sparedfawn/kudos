import React from "react";

import AgreementIcon from "../../icons/agreement_purple.svg";
import CloseIcon from "../../icons/close.svg";

const AddPostHead = () => {
    return (
        <section className="add-post-head-section">
            <img src={AgreementIcon} />
            <h3>UTWÓRZ KUDOS</h3>
            <img src={CloseIcon} />
        </section>
    );
};

export default AddPostHead;
