import React from "react";

import Kudos from "../Kudos";

const AddPostPickKudos = ({ handlePickingKudos, pickedKudosId, kudosTemplates }) => {
    const kudosExamplePerson = {
        firstName: "Imie",
        lastName: "Nazwisko",
    };

    const kudosSection = kudosTemplates.map((kudos) => {
        return (
            <Kudos
                key={kudos.id}
                className={pickedKudosId === kudos.id ? "add-post-kudos picked-kudos" : "add-post-kudos"}
                kudos={kudos}
                person={kudosExamplePerson}
                onClick={() => handlePickingKudos(kudos.id)}
            />
        );
    });
    return (
        <section className="add-post-kudos-container">
            <h5 className="section-title">Wybierz kudos</h5>
            {kudosSection}
        </section>
    );
};

export default AddPostPickKudos;
