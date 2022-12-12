import { gapi } from 'gapi-script';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const ContextAPI = createContext();

const AuthContext = ({ children }) => {
    const [profile, setProfile] = useState();
    const [network, setNetwork] = useState({});
    const clientId = '69858620552-n9ia9fk6kgvonh6q7splusmik7mlkqvd.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    const onSuccess = (res) => {
        toast.success('Google login successfully');
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        toast.error(err)
        console.log('failed', err);
    };
    const logOut = () => {
        toast.success('Google LogOut successfully');
        setProfile(null);
    };

    const authInfo = {
        onSuccess,
        onFailure,
        clientId,
        logOut,
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