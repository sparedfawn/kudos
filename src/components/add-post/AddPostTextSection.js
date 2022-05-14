import React, { useEffect } from "react";

import TextArea from "../TextArea";

const AddPostTextSection = ({ editorState, setEditorState }) => {
    useEffect(() => {

    }, [editorState])
    
    return (
        <section className="add-post-text-section">
            <h5>Treść posta nad kudosem</h5>
            <TextArea editorState={editorState} setEditorState={setEditorState} />
        </section>
    );
};

export default AddPostTextSection;
