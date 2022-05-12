import React from "react";

const Kudos = ({ kudos, person, className }) => {
    const iconPath = `../../icons/kudos/${kudos.image}`;
    return (
        <section className={className}>
            <img src={iconPath}/>
            <p>{kudos.description}</p>
            <h5>{person.firstName} {person.lastName}</h5>
        </section>
    );
};


export default Kudos;
