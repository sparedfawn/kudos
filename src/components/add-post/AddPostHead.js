import React from "react";

import { ReactComponent as AgreementIcon } from "../../icons/agreement_purple.svg";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import "./add-post-head.scss";

const AddPostHead = () => {
    const handleClickingButton = () => {
        const mainPage = document.getElementById("main-page");
        mainPage.style.display = "block";

        const addPostFormSection = document.getElementById("add-post-container");
        addPostFormSection.classList.remove("add-post-on-screen");
        addPostFormSection.classList.add("add-post-off-screen");
    };

    return (
        <section className="add-post-head-section">
            <AgreementIcon />
            <h5 className="section-title text-uppercase">Utwórz kudos</h5>
            <button className="close-page" onClick={handleClickingButton}>
                <CloseIcon />
            </button>
        </section>
    );
};

export default AddPostHead;
