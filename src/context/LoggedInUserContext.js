import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [loggedInUserData, setLoggedInUserData] = useState({
        name: "",
        avatar: "",
    });

    useEffect(() => {
        setLoggedInUserData({
            name: "Adam Testowy",
            avatar: "https://raw.githubusercontent.com/sparedfawn/image-host/main/kudos-app/face-photo.jpg",
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
