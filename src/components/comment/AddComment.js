import React, { useState, useContext } from "react";
import { EditorState } from "draft-js";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import TextArea from "../TextArea";

const AddComment = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <section>
            <img src={loggedInUserData.photo} />
            <TextArea
                editorState={editorState}
                setEditorState={setEditorState}
                placeholder="Napisz komentarz"
                readOnly={false}
                characterLimit={100}
            />
        </section>
    );
};

export default AddComment;
