import React from "react";

import TextArea from "../TextArea";

const AddPostTextSection = ({ editorState, setEditorState }) => {
    return (
        <section className="add-post-text-section">
            <h5 className="section-title">Treść posta nad kudosem</h5>
            <TextArea
                placeholder="Napisz post..."
                readOnly={false}
                characterLimit={30}
                editorState={editorState}
                setEditorState={setEditorState}
            />
        </section>
    );
};

export default AddPostTextSection;
