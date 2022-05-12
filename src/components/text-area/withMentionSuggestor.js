import React, { useState, useCallback } from "react";
import { defaultSuggestionsFilter } from "@draft-js-plugins/mention";

import mentions from "./mentions";

export function withMentionSuggestor(component) {
    const Component = component;
    const [open, setOpen] = useState(false);
    const [suggestions, setSuggestions] = useState(mentions);
    const onOpenChange = useCallback((open) => {
        setOpen(open);
    }, []);

    const onSearchChange = useCallback(({ value }) => {
        setSuggestions(defaultSuggestionsFilter(value, mentions));
    }, []);
    return function () {
        return (
            <Component
                open={open}
                onOpenChange={onOpenChange}
                suggestions={suggestions}
                onSearchChange={onSearchChange}
            />
        );
    };
}
