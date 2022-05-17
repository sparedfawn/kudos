import React, { useState, useEffect } from "react";

import Post from "./Post";
import AddPostButton from "./AddPostButton";
import AddPostForm from "../add-post/AddPostForm";

const Posts = () => {
    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        const postsJsonData = require("../../data/posts.json");
        setPostsData(postsJsonData);
    }, []);

    const addPost = (postFormData) => {
        const post = {
            ...postFormData,
            id: postsData.length + 1
        }
        setPostsData((prevPostsData) => [...prevPostsData, post]);
    };

    const postsSection = postsData.map((post) => <Post key={post.id} post={post} />);

    return (
        <>
            <AddPostForm addPost={addPost} />
            <main id="main-page" className="main-page">
                <AddPostButton />
                <section>{postsSection}</section>
            </main>
        </>
    );
};

export default Posts;
