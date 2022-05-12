import React, { useContext } from "react";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import AgreementIcon from "../../icons/agreement.svg";

const AddPostButton = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);
    const userPhotoPath = `../../images/${loggedInUserData.photo}`;
    return (
        <button>
            <img src={userPhotoPath}/>
            <span>Kilknij, aby dodać post</span>
            <img src={AgreementIcon}/>
        </button>
    );
};

export default AddPostButton;
