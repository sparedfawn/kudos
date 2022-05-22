import React from "react";

import { ReactComponent as AgreementIcon } from "../../icons/agreement_purple.svg";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { closePage } from "../../common/closeAddPostPage";

import "./add-post-head.scss";

const AddPostHead = () => {
    const handleClickingClosePageButton = () => {
        closePage();
    };

    return (
        <section className="add-post-head-section">
            <AgreementIcon className="add-post-head-agreement-icon" />
            <h5 className="section-title text-uppercase">Utwórz kudos</h5>
            <button className="close-page" onClick={handleClickingClosePageButton}>
                <CloseIcon />
            </button>
        </section>
    );
};

export default AddPostHead;
