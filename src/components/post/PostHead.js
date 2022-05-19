import React from "react";
import moment from "../../common/moment";

import { ReactComponent as AgreementIcon } from "../../icons/agreement.svg";
import "./post-head.scss";

const PostHead = ({ creationDate, author }) => {
    const timeSincePostCreation = moment(creationDate, "YYYY-MM-DDTh:mm").fromNow();

    return (
        <section className="post-head">
            <div className="post-head-data-container">
                <img className="post-author-photo" src={author.photo} />
                <h5 className="post-author">
                    {author.firstName} {author.lastName}
                </h5>
                <p className="post-time-passed">{timeSincePostCreation}</p>
            </div>
            <AgreementIcon className="post-agreement-icon" />
        </section>
    );
};

export default PostHead;
