import React, { useState } from "react";
import EditorState from "draft-js/lib/EditorState";
import { convertFromRaw } from "draft-js";

import PostHead from "./PostHead";
import Kudos from "../Kudos";
import PostBottom from "./PostBottom";
import AddComment from "../comment/AddComment";
import TextArea from "../TextArea";
import "./post.scss";

const Post = ({ post }) => {
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(convertFromRaw(post.content)));

    return (
        <div className="post-container">
            <PostHead creationDate={post.creationDate} author={post.author} />
            <TextArea editorState={editorState} readOnly={true} placeholder="" setEditorState={setEditorState} />
            <Kudos onClick={() => {}} className="post-kudos" kudos={post.kudos} person={post.person} />
            <PostBottom likes={post.likes} comments={post.comments} group={post.group} />
            <AddComment />
        </div>
    );
};

export default Post;
