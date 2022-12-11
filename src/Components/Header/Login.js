import { gapi } from 'gapi-script';
import React, { useContext, useEffect } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { toast } from 'react-hot-toast';
import { ContextAPI } from '../../AuthContext/AuthContext';

const Login = () => {
    const { profile, setProfile } = useContext(ContextAPI);
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
        setProfile(null);
    };
    return (
        <div>
            {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user_image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
};

export default Login;