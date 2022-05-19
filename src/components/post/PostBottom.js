import React, { useState } from "react";

import { ReactComponent as CommentIcon } from "../../icons/comment.svg";
import { ReactComponent as OfficeIcon } from "../../icons/office.svg";
import { ReactComponent as MoreIcon } from "../../icons/more.svg";
import LikeButton from "./LikeButton";

import "./post-bottom.scss";

const PostBottom = ({ likes, comments, group }) => {
    const [likeNumber, setLikeNumber] = useState(likes);

    return (
        <section className="post-bottom">
            <span className="group">
                <OfficeIcon className="office-icon" /> {group.name}
            </span>
            <div className="stat-section">
                <div className="like-section">
                    <LikeButton setLikes={setLikeNumber} /> <span>{likeNumber}</span>
                </div>
                <div className="comment-section">
                    <CommentIcon /> <span>{comments.length}</span>
                </div>
                <button className="more">
                    <MoreIcon />
                </button>
            </div>
        </section>
    );
};

export default PostBottom;
