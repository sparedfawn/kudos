import React from "react";

const AddPostMentions = ({ mentions, handleRemovingFromMentions }) => {
    const removedFromMentionsSection = mentions.map((mention) => (
        <div key={mention.id}>
            <span>{mention.name}</span>
            <button onClick={() => handleRemovingFromMentions(mention)}>X</button>
        </div>
    ));

    return (
        <section>
            <h5>Wybierz osobę, której przyznajesz kudos</h5>
            {removedFromMentionsSection}
        </section>
    );
};

export default AddPostMentions;
