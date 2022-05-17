import React from "react";

const Kudos = ({ kudos, person, className, onClick }) => {
    return (
        <div className={`kudos ${className}`} onClick={onClick}>
            <img className="kudos-image" src={kudos.image} />
            <div className="data-container">
                <p>{kudos.description}</p>
                <h5>
                    {person.firstName} {person.lastName}
                </h5>
            </div>
        </div>
    );
};

export default Kudos;
