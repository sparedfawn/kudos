import React, { useState, useEffect, useContext } from "react";
import { EditorState, convertToRaw } from "draft-js";

import AddPostHead from "./AddPostHead";
import AddPostTextSection from "./AddPostTextSection";
import AddPostPickKudos from "./AddPostPickKudos";
import AddPostPickGroup from "./AddPostPickGroup";
import AddPostMentions from "./AddPostMentions";
import { closePage } from "../../common/closeAddPostPage";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import "./add-post-form.scss";

const AddPostForm = ({ addPost }) => {
    const [kudosTemplatesData, setKudosTemplatesData] = useState([]);
    const [validationMessage, setValidationMessage] = useState("");
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

    useEffect(() => {
        if (validationMessage !== "") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [validationMessage]);

    useEffect(() => {
        setValidationMessage("");
    }, [editorState, formState]);

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
        const errorMessage = validateForm(mentions, formState);
        if (!errorMessage) {
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
            setEditorState(() => EditorState.createEmpty());
            setFormState({
                removedFromMentions: [],
                kudosId: 0,
                groupId: 0,
            });
            closePage();
        } else {
            setValidationMessage(errorMessage);
        }
    };

    const mentions = handleMentions(editorState, formState.removedFromMentions);

    return (
        <main id="add-post-container" className="add-post-container">
            <AddPostHead />
            {validationMessage && <div className={`validation-message`}>{validationMessage}</div>}
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

function validateForm(mentions, formState) {
    let validationMessage;
    switch (true) {
        case mentions.length === 0:
            validationMessage = "Brak osoby otrzymującej kudos";
            break;
        case mentions.length > 1:
            validationMessage = "Tylko jedna osoba moze otrzymac kudos";
            break;
        case formState.kudosId === 0:
            validationMessage = "Nie wybrano szablonu kudosa";
            break;
        case formState.groupId === 0:
            validationMessage = "Nie wybrano grupy";
            break;
    }
    return validationMessage;
}

export default AddPostForm;
