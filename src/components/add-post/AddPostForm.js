import React, { useState, useEffect } from "react";

import AddPostHead from "./AddPostHead";
import AddPostTextSection from "./AddPostTextSection";
import AddPostPickKudos from "./AddPostPickKudos";
import AddPostBottom from "./AddPostBottom";

const AddPostForm = () => {
    const [kudosTemplatesData, setKudosTemplatesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);

    useEffect(() => {
        const kudosTemplatesJsonData = require("../../data/kudos-templates.json");
        setKudosTemplatesData(kudosTemplatesJsonData);

        const groupsJsonData = require("../../data/groups.json");
        setGroupsData(groupsJsonData);
    }, []);

    return (
        <main>
            <AddPostHead />
            <AddPostTextSection />
            <AddPostPickKudos kudosTemplates={kudosTemplatesData} />
            <AddPostBottom groups={groupsData} />
        </main>
    );
};

export default AddPostForm;
