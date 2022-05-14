import React from "react";

import { withAddPostKudos } from "./withAddPostKudos";
import Kudos from "../Kudos";

const AddPostPickKudos = ({ handlePickingKudos, pickedKudosId, kudosTemplates }) => {
    const AddPostKudosComponent = withAddPostKudos(Kudos);

    const kudosExamplePerson = {
        firstName: "Imie",
        lastName: "Nazwisko",
    };

    const kudosSection = kudosTemplates.map((kudos) => {
        return (
            <div
                className={pickedKudosId === kudos.id ? "current-kudos" : "kudos"}
                onClick={() => handlePickingKudos(kudos.id)}
                key={kudos.id}
            >
                <AddPostKudosComponent kudos={kudos} person={kudosExamplePerson} />
            </div>
        );
    });
    return <section>{kudosSection}</section>;
};

export default AddPostPickKudos;
