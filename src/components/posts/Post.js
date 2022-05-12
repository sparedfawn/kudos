import React from "react";

import PostHead from "./PostHead";
import Kudos from "./Kudos";
import PostBottom from "./PostBottom";
import AddComment from "./AddComment";

const Post = ({ post }) => {
    return (
        <div>
            <PostHead creationDate={post.creationDate} author={post.author} />
            {post.content}
            <Kudos kudos={post.kudos} person={post.person} />
            <PostBottom likes={post.likes} comments={post.comments} group={post.group} />
            <AddComment />
        </div>
    );
};

export default Post;
