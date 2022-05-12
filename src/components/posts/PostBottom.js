import React, {useState} from "react";

import CommentIcon from "../../icons/comment.svg";
import MoreIcon from "../../icons/more.svg";
import LikeButton from "./LikeButton";

const PostBottom = (props) => {
    const iconPath = `../../icons/groups/${props.group.icon}`;

    const [likes, setLikes] = useState(props.likes);

    return (
        <section>
            <span>
                <img src={iconPath} /> {props.group.name}
            </span>
            <div>
                <span>
                    <LikeButton setLikes={setLikes}/> {likes}
                </span>
                <span>
                    <img src={CommentIcon} /> {props.comments.length}
                </span>
                <button>
                    <img src={MoreIcon} />
                </button>
            </div>
        </section>
    );
};

export default PostBottom;
