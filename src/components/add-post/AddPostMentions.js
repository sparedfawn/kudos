import React from "react";

const AddPostMentions = ({ mentions, handleRemovingFromMentions }) => {
    const mentionsSection = mentions.map((mention) => (
        <div key={mention.id} className="mention">
            <span>{mention.name}</span>
            <button onClick={() => handleRemovingFromMentions(mention)}>X</button>
        </div>
    ));

    return (
        <section className="add-post-mentions">
            <h5>Wybierz osobę, której przyznajesz kudos</h5>
            <div>{mentionsSection}</div>
        </section>
    );
};

export default AddPostMentions;
