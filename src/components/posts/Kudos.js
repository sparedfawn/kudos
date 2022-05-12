import React from "react";

const Kudos = ({ kudos, person }) => {
    const iconPath = `../../icons/kudos/${kudos.image}`;
    return (
        <section>
            <img src={iconPath}/>
            {kudos.description}
            {person}
        </section>
    );
};


export default Kudos;
