import React, { useState } from "react";

import HeartIcon from "../../icons/heart.svg";

const LikeButton = ({setLikes}) => {
    const [liked, setLiked] = useState(false);

    const toggleLikeButton = () => {
        setLikes(prevLikes => liked ? prevLikes - 1 : prevLikes + 1)
        setLiked(prevLikedState => !prevLikedState);
    }
    return (
        <button onClick={toggleLikeButton}>
            <img src={HeartIcon} />
        </button>
    );
};

export default LikeButton;
