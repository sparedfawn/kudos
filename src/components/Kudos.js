import React from "react";

import "./kudos.scss";

const Kudos = ({ kudos, person, className, onClick }) => {
    return (
        <div className={`kudos ${className}`} onClick={onClick}>
            <img className="kudos-image" src={kudos.image} />
            <div className="data-container">
                <p>{kudos.description}</p>
                <h5>
                    {person.name}
                </h5>
            </div>
        </div>
    );
};

export default Kudos;
