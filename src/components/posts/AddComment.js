import React, { useContext } from "react";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import TextArea from "../text-area/TextArea";

const AddComment = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);

    return (
        <section>
            <img src={loggedInUserData.photo} />
            <TextArea />
        </section>
    );
};

export default AddComment;
