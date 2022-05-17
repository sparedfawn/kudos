import React, { useContext } from "react";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import AgreementIcon from "../../icons/agreement.svg";

const AddPostButton = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);

    const handleClickingButton = () => {
        const addPostFormSection = document.getElementById("add-post-container")
        addPostFormSection.classList.add("add-post-on-screen")
        addPostFormSection.classList.remove("add-post-off-screen")

        const mainPage = document.getElementById("main-page");
        setTimeout(() => {
            mainPage.style.display = "none";
        }, 750);
    }

    return (
        <button onClick={handleClickingButton}>
            <img src={loggedInUserData.photo}/>
            <span>Kilknij, aby dodać post</span>
            <img src={AgreementIcon}/>
        </button>
    );
};

export default AddPostButton;
