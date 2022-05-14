import React, { useCallback, useState, useMemo } from "react";
import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import createMentionPlugin, { defaultSuggestionsFilter } from "@draft-js-plugins/mention";

import "@draft-js-plugins/emoji/lib/plugin.css";
import "@draft-js-plugins/hashtag/lib/plugin.css";
import "@draft-js-plugins/mention/lib/plugin.css";

import GifIcon from "../icons/gif.svg";
import AttachmentIcon from "../icons/attachment.svg";
import mentions from "./mentions";

const TextArea = ({ editorState, setEditorState }) => {
    const [open, setOpen] = useState(false);
    const [suggestions, setSuggestions] = useState(mentions);

    const { plugins, EmojiSuggestions, EmojiSelect, MentionSuggestions } = useMemo(() => {
        const mentionPlugin = createMentionPlugin();
        const hashtagPlugin = createHashtagPlugin();
        const emojiPlugin = createEmojiPlugin({ useNativeArt: false });

        const { MentionSuggestions } = mentionPlugin;
        const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
        const plugins = [mentionPlugin, hashtagPlugin, emojiPlugin];

        return { plugins, EmojiSuggestions, EmojiSelect, MentionSuggestions };
    }, []);

    const handleTextEditorValueChange = (value) => {
        setEditorState(value);
    };

    const onOpenChange = useCallback((open) => {
        setOpen(open);
    }, []);

    const onSearchChange = useCallback(({ value }) => {
        setSuggestions(defaultSuggestionsFilter(value, mentions));
    }, []);

    return (
        <div>
            <Editor
                editorState={editorState}
                onChange={handleTextEditorValueChange}
                plugins={plugins}
                placeholder="Podaj treść posta"
            />
            <EmojiSuggestions />
            <MentionSuggestions
                open={open}
                onOpenChange={onOpenChange}
                suggestions={suggestions}
                onSearchChange={onSearchChange}
            />
            <img src={GifIcon} />
            <EmojiSelect />
            <img src={AttachmentIcon} />
        </div>
    );
};

export default TextArea;