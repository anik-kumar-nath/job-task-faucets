import React, { createContext, useState } from 'react';

export const ContextAPI = createContext();

const AuthContext = ({ children }) => {
    const [profile, setProfile] = useState();

    const authInfo = {
        profile,
        setProfile
    };

    return (
        <ContextAPI.Provider value={authInfo}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthContext;