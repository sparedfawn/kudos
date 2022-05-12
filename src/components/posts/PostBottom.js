import React, { useState } from "react";

import CommentIcon from "../../icons/comment.svg";
import MoreIcon from "../../icons/more.svg";
import LikeButton from "./LikeButton";

const PostBottom = ({ likes, comments, group }) => {
    const [likeNumber, setLikeNumber] = useState(likes);

    return (
        <section>
            <span>
                <img src={group.icon} /> {group.name}
            </span>
            <div>
                <span>
                    <LikeButton setLikes={setLikeNumber} /> {likeNumber}
                </span>
                <span>
                    <img src={CommentIcon} /> {comments.length}
                </span>
                <button>
                    <img src={MoreIcon} />
                </button>
            </div>
        </section>
    );
};

export default PostBottom;
