import React from "react";

import Posts from "./components/post/Posts";
import { LoggedInUserContextProvider } from "./context/LoggedInUserContext";

const App = () => {
    return (
        <LoggedInUserContextProvider>
            <Posts />
        </LoggedInUserContextProvider>
    );
};

export default App;
