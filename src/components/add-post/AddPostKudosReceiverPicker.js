import React from "react";

import { ReactComponent as CloseIcon } from "../../icons/close.svg";

import "./add-post-kudos-receiver-picker.scss";

const AddPostKudosReceiverPicker = ({ mentions, handleRemovingFromMentions }) => {
    const mentionsSection = mentions.map((mention) => (
        <div key={mention.id} className="mention">
            <span className="mention-text">{mention.name}</span>
            <button className="mention-remove" onClick={() => handleRemovingFromMentions(mention)}>
                <CloseIcon className="close-icon" />
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

export default AddPostKudosReceiverPicker;
