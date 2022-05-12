import React, { useState } from "react";
import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import "@draft-js-plugins/emoji/lib/plugin.css";
import "@draft-js-plugins/hashtag/lib/plugin.css";

import GifIcon from "../icons/gif.svg";
import AttachmentIcon from "../icons/attachment.svg";

const hashtagPlugin = createHashtagPlugin();
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const TextArea = () => {
    const [editorValue, setEditorValue] = useState(() => EditorState.createEmpty());

    const handleTextEditorValueChange = (value) => {
        setEditorValue(value);
    };

    return (
        <div>
            <Editor
                editorState={editorValue}
                onChange={handleTextEditorValueChange}
                plugins={[emojiPlugin, hashtagPlugin]}
            />
            <EmojiSuggestions />
            <img src={GifIcon} />
            <EmojiSelect />
            <img src={AttachmentIcon} />
        </div>
    );
};

export default TextArea;
