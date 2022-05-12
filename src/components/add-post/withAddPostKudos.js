import React from "react";

export function withAddPostKudos(component) {
    const Component = component
    return function (props) {
        return <Component className="add-post-kudos" {...props} />;
    };
}
