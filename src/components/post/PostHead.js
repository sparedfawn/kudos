import React from "react";
import moment from "moment";

import AgreementIcon from "../../icons/agreement.svg";

const PostHead = ({ creationDate, author }) => {
    const timeSincePostCreation = moment(creationDate, "YYYY-MM-DDTh:mm").fromNow();

    return (
        <section>
            <div>
                <img src={author.photo} />
                <h5>{author.firstName} {author.lastName}</h5>
                <p>{timeSincePostCreation}</p>
            </div>
            <img src={AgreementIcon} />
        </section>
    );
};

export default PostHead;
