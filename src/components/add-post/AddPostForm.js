import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";

import AddPostHead from "./AddPostHead";
import AddPostTextSection from "./AddPostTextSection";
import AddPostPickKudos from "./AddPostPickKudos";
import AddPostBottom from "./AddPostBottom";
import AddPostMentions from "./AddPostMentions";

const AddPostForm = () => {
    const [kudosTemplatesData, setKudosTemplatesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [formState, setFormState] = useState({
        removedFromMentions: [],
        kudosId: 0,
        groupId: 0,
    });

    useEffect(() => {
        const kudosTemplatesJsonData = require("../../data/kudos-templates.json");
        setKudosTemplatesData(kudosTemplatesJsonData);

        const groupsJsonData = require("../../data/groups.json");
        setGroupsData(groupsJsonData);
    }, []);

    const handleRemovingFromMentions = (mention) => {
        setFormState((prevFormState) => {
            return {
                ...prevFormState,
                removedFromMentions: [...prevFormState.removedFromMentions, mention],
            };
        });
    };

    // //fixMe tutaj jest normalnie jak wziąć state edytora
    // console.log(convertToRaw(editorState.getCurrentContent()).entityMap)

    const mentions = handleMentions(editorState, formState.removedFromMentions);

    return (
        <main>
            <AddPostHead />
            <AddPostTextSection editorState={editorState} setEditorState={setEditorState} />
            {/* <Editor editorState={editorState} readOnly/> */}
            <AddPostMentions mentions={mentions} handleRemovingFromMentions={handleRemovingFromMentions} />
            <AddPostPickKudos kudosTemplates={kudosTemplatesData} />
            <AddPostBottom groups={groupsData} />
        </main>
    );
};

function handleMentions(editorState, removedFromMentions) {
    const textEditorEntities = convertToRaw(editorState.getCurrentContent()).entityMap;
    const mentions = Object.entries(textEditorEntities)
        .map((e) => e[1])
        .filter((e) => e.type === "mention")
        .map((mention) => mention.data.mention);

    const mentionsWithoutDuplicates = mentions.filter((mention, index, mentions) => {
        return index === mentions.findIndex((e) => e.id === mention.id);
    });

    const mentionsWithoutRemoved = mentionsWithoutDuplicates.filter(
        (mention) => !removedFromMentions.includes(mention)
    );

    return mentionsWithoutRemoved;
}

export default AddPostForm;
