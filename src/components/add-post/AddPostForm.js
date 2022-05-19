import React, { useState, useEffect, useContext } from "react";
import { EditorState, convertToRaw } from "draft-js";

import AddPostHead from "./AddPostHead";
import AddPostTextSection from "./AddPostTextSection";
import AddPostPickKudos from "./AddPostPickKudos";
import AddPostPickGroup from "./AddPostPickGroup";
import AddPostMentions from "./AddPostMentions";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import "./add-post-form.scss";

const AddPostForm = ({ addPost }) => {
    const [kudosTemplatesData, setKudosTemplatesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);
    const { loggedInUserData } = useContext(LoggedInUserContext);

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

    const handlePickingKudos = (id) => {
        setFormState((prevFormState) => {
            return {
                ...prevFormState,
                kudosId: id,
            };
        });
    };

    const handlePickingGroup = (pickedId) => {
        setFormState((prevFormState) => {
            return {
                ...prevFormState,
                groupId: pickedId,
            };
        });
    };

    const handlePublishingPost = () => {
        const postFormData = {
            author: loggedInUserData,
            creationDate: new Date(),
            content: convertToRaw(editorState.getCurrentContent()),
            likes: 0,
            comments: [],
            person: mentions[0],
            group: groupsData.find((group) => group.id === formState.groupId),
            kudos: kudosTemplatesData.find((kudos) => kudos.id === formState.kudosId),
        };
        addPost(postFormData);
    };

    const mentions = handleMentions(editorState, formState.removedFromMentions);

    return (
        <main id="add-post-container" className="add-post">
            <AddPostHead />
            <AddPostTextSection editorState={editorState} setEditorState={setEditorState} />
            <AddPostMentions mentions={mentions} handleRemovingFromMentions={handleRemovingFromMentions} />
            <AddPostPickKudos
                handlePickingKudos={handlePickingKudos}
                pickedKudosId={formState.kudosId}
                kudosTemplates={kudosTemplatesData}
            />
            <section className="pick-group-submit">
                <AddPostPickGroup
                    currentGroupId={formState.groupId}
                    handlePickingGroup={handlePickingGroup}
                    groups={groupsData}
                />
                <button className="submit-button" onClick={handlePublishingPost}>
                    Opublikuj
                </button>
            </section>
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
