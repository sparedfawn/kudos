import React, { useState, useContext } from "react";
import { EditorState } from "draft-js";

import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import TextArea from "../TextArea";
import "./add-comment.scss";

const AddComment = () => {
    const { loggedInUserData } = useContext(LoggedInUserContext);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <section className="add-comment">
            <img className="face-photo" src={loggedInUserData.avatar} />
            <TextArea
                editorState={editorState}
                setEditorState={setEditorState}
                placeholder="Napisz komentarz..."
                readOnly={false}
                characterLimit={100}
            />
        </section>
    );
};

export default AddComment;
