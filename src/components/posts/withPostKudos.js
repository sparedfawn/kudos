import React from "react";

export function withPostKudos(component) {
    const Component = component
    return function (props) {
        return <Component className="post-kudos" {...props} />;
    };
}
