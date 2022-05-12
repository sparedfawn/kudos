import React, { useState } from "react";
import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import "@draft-js-plugins/emoji/lib/plugin.css";

import GifIcon from "../icons/gif.svg";
import AttachmentIcon from "../icons/attachment.svg";

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const TextArea = () => {
    const [editorValue, setEditorValue] = useState(EditorState.createEmpty());

    const handleTextEditorValueChange = (value) => {
        setEditorValue(value);
    };

    return (
        <div>
            <Editor editorState={editorValue} onChange={handleTextEditorValueChange} plugins={[emojiPlugin]} />
            <EmojiSuggestions />
            <img src={GifIcon} />
            <EmojiSelect />
            <img src={AttachmentIcon} />
        </div>
    );
};

export default TextArea;
