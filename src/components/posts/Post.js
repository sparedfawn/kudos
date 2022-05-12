import React from "react";

import { withPostKudos } from "./withPostKudos";
import PostHead from "./PostHead";
import Kudos from "../Kudos";
import PostBottom from "./PostBottom";
import AddComment from "./AddComment";

const Post = ({ post }) => {
    const PostKudosComponent = withPostKudos(Kudos);
    return (
        <div>
            <PostHead creationDate={post.creationDate} author={post.author} />
            <p>{post.content}</p>
            <PostKudosComponent kudos={post.kudos} person={post.person} />
            <PostBottom likes={post.likes} comments={post.comments} group={post.group} />
            <AddComment />
        </div>
    );
};

export default Post;
