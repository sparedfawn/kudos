import React, { useState } from "react";

import { ReactComponent as CommentIcon } from "../../icons/comment.svg";
import { ReactComponent as OfficeIcon } from "../../icons/office.svg";
import { ReactComponent as MoreIcon } from "../../icons/more.svg";
import LikePostButton from "./LikePostButton";

import "./post-bottom.scss";
import PostBottomPopupMenu from "./PostBottomPopupMenu";

const PostBottom = ({ likes, comments, group }) => {
    const [likeNumber, setLikeNumber] = useState(likes);
    const [isPopupMenuOpened, setIsPopupMenuOpened] = useState(false);

    const togglePopupMenu = () => {
        setIsPopupMenuOpened((prevState) => !prevState);
    };

    return (
        <section className="post-bottom">
            <span className="group">
                <OfficeIcon className="office-icon" /> {group.name}
            </span>
            <div className="stat-section">
                <div className="like-section">
                    <LikePostButton setLikes={setLikeNumber} /> <span>{likeNumber}</span>
                </div>
                <div className="comment-section">
                    <CommentIcon /> <span>{comments.length}</span>
                </div>
                <button className="more" onClick={togglePopupMenu}>
                    <MoreIcon />
                </button>
                <PostBottomPopupMenu isOpened={isPopupMenuOpened} />
            </div>
        </section>
    );
};

export default PostBottom;
