import React, { useState } from "react";

import { ReactComponent as HeartIcon } from "../../icons/heart.svg";

const LikeButton = ({ setLikes }) => {
    const [liked, setLiked] = useState(false);

    const toggleLikeButton = () => {
        setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
        setLiked((prevLikedState) => !prevLikedState);
    };
    return (
        <button className="like-button" onClick={toggleLikeButton}>
            <HeartIcon className={liked ? "liked" : "not-liked"}/>
        </button>
    );
};

export default LikeButton;
