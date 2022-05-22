import React, { useCallback, useState, useMemo } from "react";
import Editor from "@draft-js-plugins/editor";
import { Modifier } from "draft-js";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import createMentionPlugin, { defaultSuggestionsFilter } from "@draft-js-plugins/mention";

import "@draft-js-plugins/emoji/lib/plugin.css";
import "@draft-js-plugins/hashtag/lib/plugin.css";
import "@draft-js-plugins/mention/lib/plugin.css";

import { ReactComponent as GifIcon } from "../icons/gif.svg";
import { ReactComponent as AttachmentIcon } from "../icons/attachment.svg";
import users from "../data/users";
import { EditorState } from "draft-js";

import "./text-area.scss";

const TextArea = ({ editorState, setEditorState, readOnly, placeholder, characterLimit }) => {
    const [open, setOpen] = useState(false);
    const [suggestions, setSuggestions] = useState(users);

    const characterNumber = editorState.getCurrentContent().getPlainText("").length;

    // creates all plugins
    const { plugins, EmojiSuggestions, EmojiSelect, MentionSuggestions } = useMemo(() => {
        const mentionPlugin = createMentionPlugin();
        const hashtagPlugin = createHashtagPlugin();
        const emojiPlugin = createEmojiPlugin({ useNativeArt: false }); // useNativeArt true uses browser default emotes

        const { MentionSuggestions } = mentionPlugin;
        const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
        const plugins = [mentionPlugin, hashtagPlugin, emojiPlugin];

        return { plugins, EmojiSuggestions, EmojiSelect, MentionSuggestions };
    }, []);

    const handleTextEditorValueChange = (value) => {
        document.getElementById("character-count").classList.remove("limit-matched");
        setEditorState(value);
    };

    // handles potencial overlimiting characters inputed
    const handleBeforeInput = (input) => {
        if (characterLimit !== undefined) {
            if (input && characterNumber >= characterLimit) {
                document.getElementById("character-count").classList.add("limit-matched");
                return "handled";
            }
        }
        document.getElementById("character-count").classList.remove("limit-matched");
        return "not-handled";
    };

    // handles pasting text
    const handlePastedText = (input) => {
        const remainingLength = characterLimit - characterNumber;
        if (input.length + characterNumber >= characterLimit) {
            // if we are over limit text is being cut until matching the limit
            const newContent = Modifier.insertText(
                editorState.getCurrentContent(),
                editorState.getSelection(),
                input.slice(0, remainingLength)
            );
            handleTextEditorValueChange(EditorState.push(editorState, newContent, "insert-characters"));
            document.getElementById("character-count").classList.add("limit-matched");
            return "handled";
        } else {
            return "not-handled";
        }
    };

    const onOpenChange = useCallback((open) => {
        setOpen(open);
    }, []);

    const onSearchChange = useCallback(({ value }) => {
        setSuggestions(defaultSuggestionsFilter(value, users));
    }, []);

    return (
        <div className={`text-area ${readOnly ? "read-only-text-area" : "write-text-area"}`}>
            <Editor
                editorState={editorState}
                onChange={handleTextEditorValueChange}
                plugins={plugins}
                placeholder={placeholder}
                readOnly={readOnly}
                handleBeforeInput={handleBeforeInput}
                handlePastedText={handlePastedText}
            />
            {!readOnly && ( // if text area is destined to be input we display all tools
                <div className="text-area-tools">
                    <EmojiSuggestions />
                    <MentionSuggestions
                        open={open}
                        onOpenChange={onOpenChange}
                        suggestions={suggestions}
                        onSearchChange={onSearchChange}
                    />
                    {characterLimit && (
                        <span id="character-count" className="character-count">
                            {characterNumber}/{characterLimit}
                        </span>
                    )}

                    <GifIcon className="gif-icon" />
                    <EmojiSelect />
                    <AttachmentIcon className="attachment-icon" />
                </div>
            )}
        </div>
    );
};

export default TextArea;
