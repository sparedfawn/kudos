import React, { useState, useEffect } from "react";

const Context = React.createContext();

// provides SSOT about logged-in user
const ContextProvider = ({ children }) => {
    const [loggedInUserData, setLoggedInUserData] = useState({
        id: 0,
        name: "",
        link: "",
        avatar: "",
    });

    useEffect(() => {
        setLoggedInUserData({
            id: 1,
            name: "Janusz Korwin-Mikke",
            link: "https://twitter.com/JkmMikke",
            avatar: "https://pbs.twimg.com/profile_images/593430376443445248/m99ZwQgD_400x400.jpg",
        });
    }, []);

    return (
        <Context.Provider
            value={{
                loggedInUserData,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { ContextProvider as LoggedInUserContextProvider, Context as LoggedInUserContext };
