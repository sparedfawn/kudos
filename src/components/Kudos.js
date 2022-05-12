import React from "react";

const Kudos = ({ kudos, person, className }) => {
    return (
        <section className={className}>
            <img src={kudos.image}/>
            <p>{kudos.description}</p>
            <h5>{person.firstName} {person.lastName}</h5>
        </section>
    );
};


export default Kudos;
