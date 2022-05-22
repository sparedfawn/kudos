import React from "react";

import "./post-bottom-popup-menu.scss";

const PostBottomPopupMenu = ({ isOpened }) => {
    return (
        <div className="relative-container">
            {isOpened && (
                <div className="post-bottom-popup-menu-container">
                    <div>Edytuj</div>
                    <div>Udostepnij</div>
                </div>
            )}
        </div>
    );
};

export default PostBottomPopupMenu;
