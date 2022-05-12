import React from "react";

import { withAddPostKudos } from "./withAddPostKudos";
import Kudos from "../Kudos";

const AddPostPickKudos = ({ kudosTemplates }) => {
    const AddPostKudosComponent = withAddPostKudos(Kudos);

    const kudosExamplePerson = {
        firstName: "Imie",
        lastName: "Nazwisko",
    };

    const kudosSection = kudosTemplates.map((kudos) => {
        return (
            <div onClick={() => {}} key={kudos.id}>
                <AddPostKudosComponent kudos={kudos} person={kudosExamplePerson} />
            </div>
        );
    });
    return <section>{kudosSection}</section>;
};

export default AddPostPickKudos;
