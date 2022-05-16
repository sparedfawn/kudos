import React from "react";

import AgreementIcon from "../../icons/agreement_purple.svg";
import CloseIcon from "../../icons/close.svg";

const AddPostHead = () => {
    const handleClickingButton = () => {
        const addPostFormSection = document.getElementById("add-post-container")
        addPostFormSection.classList.remove("add-post-on-screen")
        addPostFormSection.classList.add("add-post-off-screen")
    }
    
    return (
        <section className="add-post-head-section">
            <img src={AgreementIcon} />
            <h3>UTWÓRZ KUDOS</h3>
            <button onClick={handleClickingButton}>
                <img src={CloseIcon} />
            </button>
        </section>
    );
};

export default AddPostHead;
