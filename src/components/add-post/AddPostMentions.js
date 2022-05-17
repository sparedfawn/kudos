import React from "react";

import CloseIcon from "../../icons/close.svg"

const AddPostMentions = ({ mentions, handleRemovingFromMentions }) => {
    const mentionsSection = mentions.map((mention) => (
        <div key={mention.id} className="mention">
            <span className="mention-text">{mention.name}</span>
            <button className="mention-remove" onClick={() => handleRemovingFromMentions(mention)}>
                <img src={CloseIcon}/>
            </button>
        </div>
    ));

    return (
        <section className="add-post-mentions">
            <h5 className="section-title">Wybierz osobę, której przyznajesz kudos</h5>
            <div className="mentions-container">{mentionsSection}</div>
        </section>
    );
};

export default AddPostMentions;
