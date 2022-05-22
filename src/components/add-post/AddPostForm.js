import React, { useState, useEffect, useContext } from "react";
import { EditorState, convertToRaw } from "draft-js";

import AddPostHead from "./AddPostHead";
import AddPostContentInput from "./AddPostContentInput";
import AddPostKudosTemplatePicker from "./AddPostKudosTemplatePicker";
import AddPostGroupPicker from "./AddPostGroupPicker";
import AddPostKudosReceiverPicker from "./AddPostKudosReceiverPicker";

import { closePage } from "../../common/closeAddPostPage";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

import "./add-post.scss";

const AddPostForm = ({ addPost }) => {
    const { loggedInUserData } = useContext(LoggedInUserContext);

    const [kudosTemplatesData, setKudosTemplatesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [formState, setFormState] = useState({
        removedFromMentions: [],
        kudosId: 0,
        groupId: 0,
    });

    const [validationMessage, setValidationMessage] = useState("");

    useEffect(() => {
        const kudosTemplatesJsonData = require("../../data/kudos-templates.json");
        setKudosTemplatesData(kudosTemplatesJsonData);

        const groupsJsonData = require("../../data/groups.json");
        setGroupsData(groupsJsonData);
    }, []);

    // scrolls up when validation message appears
    useEffect(() => {
        if (validationMessage !== "") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [validationMessage]);

    // resets validation message when changing form data
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
        const messageAfterValidation = validateForm(mentions, formState);

        // if there is no message then validation is passed
        if (!messageAfterValidation) {
            // post object out of form data
            const postData = {
                author: loggedInUserData,
                receiver: mentions[0],
                creationDate: new Date(),
                content: convertToRaw(editorState.getCurrentContent()), // converts post content to json object
                likes: 0,
                comments: [],
                group: groupsData.find((group) => group.id === formState.groupId),
                kudosTemplate: kudosTemplatesData.find((kudos) => kudos.id === formState.kudosId),
            };

            // adds post to array of posts
            addPost(postData);

            // resets form state to initial
            setEditorState(() => EditorState.createEmpty());
            setFormState({
                removedFromMentions: [],
                kudosId: 0,
                groupId: 0,
            });

            closePage();
        } else {
            setValidationMessage(messageAfterValidation);
        }
    };

    const mentions = handleMentions(editorState, formState.removedFromMentions);

    return (
        <main id="add-post-container" className="add-post-container">
            <AddPostHead />
            {validationMessage && <div className={`validation-message`}>{validationMessage}</div>}
            <AddPostContentInput editorState={editorState} setEditorState={setEditorState} />
            <AddPostKudosReceiverPicker mentions={mentions} handleRemovingFromMentions={handleRemovingFromMentions} />
            <AddPostKudosTemplatePicker
                handlePickingKudos={handlePickingKudos}
                pickedKudosId={formState.kudosId}
                kudosTemplates={kudosTemplatesData}
            />
            <section className="pick-group-submit">
                <AddPostGroupPicker
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

// returns array of mentions from post content without duplicates and without mentions removed from receivers
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

// returns undefined validation message when ok
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
