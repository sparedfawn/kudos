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

    const postsSection = postsData.map((post) => <Post key={post.id} post={post} />);

    return (
        <main>
            <AddPostForm />
            <AddPostButton />
            {postsSection}
        </main>
    );
};

export default Posts;
