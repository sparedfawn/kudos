import React from "react";

const Kudos = ({ kudos, person, className, onClick }) => {
    console.log(person)
    return (
        <div onClick={onClick} className={className}>
            <img src={kudos.image} />
            <div>
                <p>{kudos.description}</p>
                <h5>
                    {person.firstName} {person.lastName}
                </h5>
            </div>
        </div>
    );
};

export default Kudos;
