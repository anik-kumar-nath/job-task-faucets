import React, { createContext, useState } from 'react';

export const ContextAPI = createContext();

const AuthContext = ({ children }) => {
    const [profile, setProfile] = useState();
    const [network, setNetwork] = useState({});

    const authInfo = {
        profile,
        setProfile,
        network,
        setNetwork
    };

    return (
        <ContextAPI.Provider value={authInfo}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthContext;