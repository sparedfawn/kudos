import React from "react";

import TextArea from "../TextArea";

const AddPostTextSection = ({ editorState, setEditorState }) => {
    return (
        <section className="add-post-text-section">
            <h5>Treść posta nad kudosem</h5>
            <TextArea editorState={editorState} setEditorState={setEditorState} />
            <h5>Wybierz osobę, której przyznajesz kudos</h5>
        </section>
    );
};

export default AddPostTextSection;
