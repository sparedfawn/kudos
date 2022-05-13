import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor"

import AddPostHead from "./AddPostHead";
import AddPostTextSection from "./AddPostTextSection";
import AddPostPickKudos from "./AddPostPickKudos";
import AddPostBottom from "./AddPostBottom";

const AddPostForm = () => {
    const [kudosTemplatesData, setKudosTemplatesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    useEffect(() => {
        const kudosTemplatesJsonData = require("../../data/kudos-templates.json");
        setKudosTemplatesData(kudosTemplatesJsonData);

        const groupsJsonData = require("../../data/groups.json");
        setGroupsData(groupsJsonData);
    }, []);

    //fixMe tutaj jest normalnie jak wziąć state edytora
    console.log(convertToRaw(editorState.getCurrentContent()))

    const raw = convertToRaw(editorState.getCurrentContent())
    return (
        <main>
            <AddPostHead />
            <AddPostTextSection editorState={editorState} setEditorState={setEditorState}/>
            {/* <Editor editorState={editorState} readOnly/> */}
            <AddPostPickKudos kudosTemplates={kudosTemplatesData} />
            <AddPostBottom groups={groupsData} />
        </main>
    );
};

export default AddPostForm;
