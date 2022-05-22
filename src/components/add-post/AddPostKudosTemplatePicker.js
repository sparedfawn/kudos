import React from "react";

import Kudos from "../Kudos";

import "./add-post-kudos-template-picker.scss";

const AddPostKudosTemplatePicker = ({ handlePickingKudos, pickedKudosId, kudosTemplates }) => {
    const kudosExampleReceiver = {
        name: "Imie Nazwisko",
    };

    const kudosSection = kudosTemplates.map((kudos) => {
        return (
            <Kudos
                key={kudos.id}
                className={pickedKudosId === kudos.id ? "add-post-kudos picked-kudos" : "add-post-kudos"} // if kudos is currently selected we give extra css class
                template={kudos}
                receiver={kudosExampleReceiver}
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

export default AddPostKudosTemplatePicker;
