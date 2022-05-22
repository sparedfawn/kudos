import React, { useState } from "react";

import { ReactComponent as HeartIcon } from "../../icons/heart.svg";

const LikePostButton = ({ setLikes }) => {
    const [liked, setLiked] = useState(false);

    // handles liking and unliking post
    const toggleLikeButton = () => {
        setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
        setLiked((prevLikedState) => !prevLikedState);
    };

    return (
        <button className="like-button" onClick={toggleLikeButton}>
            <HeartIcon className={liked ? "liked" : "not-liked"} />
        </button>
    );
};

export default LikePostButton;
