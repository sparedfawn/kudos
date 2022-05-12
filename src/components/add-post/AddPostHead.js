import React from "react";

import AgreementIcon from "../../icons/agreement.svg";
import CloseIcon from "../../icons/close.svg";

const AddPostHead = () => {
    return (
        <section>
            <img src={AgreementIcon} />
            <h3>UTWÓRZ KUDOS</h3>
            <img src={CloseIcon} />
        </section>
    );
};

export default AddPostHead;
