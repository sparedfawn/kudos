import React from "react";

import TextArea from "../TextArea";

import "./add-post-content-input.scss";

const AddPostContentInput = ({ editorState, setEditorState }) => {
    return (
        <section className="add-post-text-section">
            <h5 className="section-title">Treść posta nad kudosem</h5>
            <div className="add-post-text-area-container">
                <TextArea
                    placeholder="Napisz post..."
                    readOnly={false}
                    characterLimit={500}
                    editorState={editorState}
                    setEditorState={setEditorState}
                />
            </div>
        </section>
    );
};

export default AddPostContentInput;
