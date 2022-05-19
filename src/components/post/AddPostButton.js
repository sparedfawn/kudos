import React, { useContext } from "react";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import { ReactComponent as AgreementIcon } from "../../icons/agreement.svg";
import "./add-post-button.scss";

const AddPostButton = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);

    const handleClickingButton = () => {
        const addPostFormSection = document.getElementById("add-post-container");
        addPostFormSection.classList.add("add-post-on-screen");
        addPostFormSection.classList.remove("add-post-off-screen");

        const mainPage = document.getElementById("main-page");
        setTimeout(() => {
            mainPage.style.display = "none";
        }, 750);
    };

    return (
        <button className="add-post-button" onClick={handleClickingButton}>
            <img className="face-photo" src={loggedInUserData.photo} />
            <span className="add-post-button-text">Kilknij, aby dodać post</span>
            <AgreementIcon />
        </button>
    );
};

export default AddPostButton;
