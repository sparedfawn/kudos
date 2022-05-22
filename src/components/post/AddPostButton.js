import React, { useContext } from "react";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import { ReactComponent as AgreementIcon } from "../../icons/agreement.svg";
import { openPage } from "../../common/openAddPostPage";

import "./add-post-button.scss";

const AddPostButton = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);

    const handleClickingButton = () => {
        openPage();
    };

    return (
        <button className="add-post-button" onClick={handleClickingButton}>
            <img className="face-photo" src={loggedInUserData.avatar} />
            <span className="add-post-button-text">Kilknij, aby dodać post</span>
            <AgreementIcon />
        </button>
    );
};

export default AddPostButton;
