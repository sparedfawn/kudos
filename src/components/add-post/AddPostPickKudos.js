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
                className={pickedKudosId === kudos.id ? "add-post-kudos current-kudos" : "add-post-kudos"}
                kudos={kudos}
                person={kudosExamplePerson}
                onClick={() => handlePickingKudos(kudos.id)}
            />
        );
    });
    return (
        <section>
            <h5>Wybierz kudos</h5>
            {kudosSection}
        </section>
    );
};

export default AddPostPickKudos;
