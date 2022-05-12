import React, { useCallback, useState, useMemo } from "react";
import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import createMentionPlugin from "@draft-js-plugins/mention";

import "@draft-js-plugins/emoji/lib/plugin.css";
import "@draft-js-plugins/hashtag/lib/plugin.css";
import "@draft-js-plugins/mention/lib/plugin.css";

import GifIcon from "../../icons/gif.svg";
import AttachmentIcon from "../../icons/attachment.svg";
import { withMentionSuggestor } from "./withMentionSuggestor";

const TextArea = () => {
    const [editorValue, setEditorValue] = useState(() => EditorState.createEmpty());

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
        setEditorValue(value);
    };

    const MentionSuggestionsComponent = withMentionSuggestor(MentionSuggestions);

    return (
        <div>
            <Editor editorState={editorValue} onChange={handleTextEditorValueChange} plugins={plugins} />
            <EmojiSuggestions />
            <MentionSuggestionsComponent />
            <img src={GifIcon} />
            <EmojiSelect />
            <img src={AttachmentIcon} />
        </div>
    );
};

export default TextArea;
