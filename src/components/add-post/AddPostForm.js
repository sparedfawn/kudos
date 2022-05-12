import React, { useState, useEffect } from "react";

import AddPostHead from "./AddPostHead";
import AddPostTextSection from "./AddPostTextSection";
import AddPostPickKudos from "./AddPostPickKudos";
import AddPostBottom from "./AddPostBottom";

const AddPostForm = () => {
    const [kudosTemplatesData, setKudosTemplatesData] = useState([]);

    useEffect(() => {
        const kudosTemplatesJsonData = require("../../data/kudos-templates.json");
        setKudosTemplatesData(kudosTemplatesJsonData);
    }, []);

    return (
        <main>
            <AddPostHead />
            <AddPostTextSection />
            <AddPostPickKudos />
            <AddPostBottom />
        </main>
    );
};

export default AddPostForm;
