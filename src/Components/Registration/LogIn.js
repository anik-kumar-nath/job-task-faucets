import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
import { ContextAPI } from '../../AuthContext/AuthContext';

const LogIn = () => {
    const { profile, onSuccess, onFailure, clientId, logOut } = useContext(ContextAPI);
    return (
        <div className='mx-auto bg-light p-3' style={{ 'maxWidth': '400px' }}>
            <h2 className='text-center fw-bold'>Log In</h2>
            <Form className='text-start'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-100" type="submit">
                    Log In
                </Button>
            </Form>
            <strong className='py-1'>Don't have an account? <Link to={'/signup'}>Signup</Link></strong>
            <div className='pt-3'>
                {profile ?

                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                    :
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                }
            </div>
        </div>
    );
};

export default LogIn;