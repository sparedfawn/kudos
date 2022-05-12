import React from "react";

import TextArea from "../TextArea";

const AddPostTextSection = () => {
    return <section className="add-post-text-section">
        <h5>Treść posta nad kudosem</h5>
        <TextArea />
        <h5>Wybierz osobę, której przyznajesz kudos</h5>
    </section>;
};

export default AddPostTextSection;
