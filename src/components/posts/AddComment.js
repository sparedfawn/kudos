import React, { useContext } from "react";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import TextArea from "../TextArea";

const AddComment = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);
    const userPhotoPath = `../../images/${loggedInUserData.photo}`;

    return (
        <section>
            <img src={userPhotoPath} />
            <TextArea />
        </section>
    );
};

export default AddComment;
