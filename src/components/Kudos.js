import React from "react";

import "./kudos.scss";

const Kudos = ({ receiver, template, className, onClick }) => {
    return (
        <div className={`kudos ${className}`} onClick={onClick}>
            <img className="kudos-image" src={template.image} />
            <div className="data-container">
                <p>{template.description}</p>
                <h5>
                    {receiver.name}
                </h5>
            </div>
        </div>
    );
};

export default Kudos;
