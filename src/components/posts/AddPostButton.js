import React, { useContext } from "react";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import AgreementIcon from "../../icons/agreement.svg";

const AddPostButton = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);
    return (
        <button>
            <img src={loggedInUserData.photo}/>
            <span>Kilknij, aby dodać post</span>
            <img src={AgreementIcon}/>
        </button>
    );
};

export default AddPostButton;
